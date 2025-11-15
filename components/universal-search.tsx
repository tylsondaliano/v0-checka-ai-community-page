"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { isPixPayload, pickResult } from "@/lib/mocks"
import { SearchResults } from "./search-results"

export function UniversalSearch() {
  const [query, setQuery] = useState("")
  const [isPixDetected, setIsPixDetected] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [resultType, setResultType] = useState<"seguro" | "atencao" | "golpe" | null>(null)
  const [isListening, setIsListening] = useState(false)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const recognitionRef = useRef<any>(null)
  const searchTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setIsPixDetected(isPixPayload(query))
  }, [query])

  useEffect(() => {
    if (searchTimerRef.current) {
      clearTimeout(searchTimerRef.current)
    }

    if (query.trim().length === 0 && !selectedImage) {
      setShowResults(false)
      return
    }

    if (query.trim().length > 0) {
      searchTimerRef.current = setTimeout(() => {
        performSearch()
      }, 300) // 300ms debounce
    }

    return () => {
      if (searchTimerRef.current) {
        clearTimeout(searchTimerRef.current)
      }
    }
  }, [query, selectedImage])

  useEffect(() => {
    if (query.trim().length === 0 && !selectedImage) {
      setShowResults(false)
    }
  }, [query, selectedImage])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = false
        recognitionRef.current.interimResults = false
        recognitionRef.current.lang = "pt-BR"

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript
          setQuery(transcript)
          setIsListening(false)
        }

        recognitionRef.current.onerror = (event: any) => {
          console.error("[v0] Speech recognition error:", event.error)
          setIsListening(false)
        }

        recognitionRef.current.onend = () => {
          setIsListening(false)
        }
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [])

  const performSearch = () => {
    if (selectedImage) {
      setResultType("atencao")
      setShowResults(true)
      return
    }

    if (isPixPayload(query)) {
      setResultType(pickResult())
    } else {
      setResultType(null)
    }
    setShowResults(true)
  }

  const handleSearch = () => {
    if (!query.trim() && !selectedImage) return
    performSearch()
  }

  const handleMicClick = () => {
    if (!recognitionRef.current) {
      alert("Seu navegador não suporta reconhecimento de voz. Por favor, use Chrome, Edge ou Safari.")
      return
    }

    if (isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    } else {
      try {
        recognitionRef.current.start()
        setIsListening(true)
      } catch (error) {
        console.error("[v0] Error starting speech recognition:", error)
      }
    }
  }

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      setQuery(`Busca por imagem: ${file.name}`)
      handleSearch()
    }
  }

  return (
    <div className="w-full" ref={dropdownRef}>
      <div className="relative mx-auto max-w-3xl">
        <div
          className={`relative flex items-center gap-3 bg-white px-6 py-2 border border-[#00c951] focus-within:shadow-md transition-shadow ${
            showResults ? "rounded-t-md" : "rounded-md"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-5 text-gray-500 shrink-0"
          >
            <path
              d="m15.71631875 15.065 -3.9463125 -3.94630625c3.3423375 -3.843725 1.27035 -9.8642375 -3.72958125 -10.836925C3.0405 -0.69091875 -1.137425 4.1137375 0.52016875 8.93014375c1.5268375 4.4364875 7.058 5.91855625 10.598525 2.8398625l3.94630625 3.9463125c0.25953125 0.24184375 0.68355 0.11204375 0.76323125 -0.23364375 0.03438125 -0.149175 -0.00755 -0.30568125 -0.1119125 -0.417675ZM1.1046875 6.78835c0 -4.3752875 4.7363875 -7.10984375 8.5255 -4.9222 3.78910625 2.18764375 3.78910625 7.65675625 0 9.8444 -0.86403125 0.49885 -1.84414375 0.76146875 -2.8418375 0.76146875 -3.13741875 -0.0038125 -5.67985625 -2.54624375 -5.6836625 -5.68366875Z"
              strokeWidth="0.0625"
            />
          </svg>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Procurar"
            className="flex-1 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none text-base"
            aria-label="Busca universal"
          />

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            aria-label="Selecionar imagem"
          />

          {/* Right side icons */}
          <div className="flex items-center gap-3 shrink-0">
            {showResults && (
              <button
                type="button"
                onClick={() => {
                  setQuery("")
                  setShowResults(false)
                  setSelectedImage(null)
                }}
                className="transition-colors"
                aria-label="Limpar busca"
                title="Limpar busca"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 text-[#00c951]"
                >
                  <path
                    d="M15.6480375 14.7956875c0.33965 0.3164875 0.20933125 0.881975 -0.23458125 1.01788125 -0.22063125 0.06754375 -0.46046875 0.00328125 -0.61776875 -0.16553125L7.98495 8.8383 1.17420625 15.6480375c-0.33965 0.3164875 -0.8945375 0.14660625 -0.9988 -0.3057875 -0.04498125 -0.1952 0.00989375 -0.4 0.14645625 -0.5465625l6.80973125 -6.8107375L0.3218625 1.17420625C0.005375 0.83455625 0.17525625 0.27966875 0.62764375 0.17540625c0.19520625 -0.04498125 0.40000625 0.00989375 0.5465625 0.14645625l6.81074375 6.80973125L14.7956875 0.3218625c0.33965625 -0.3164875 0.89454375 -0.14660625 0.9988 0.30578125 0.0449875 0.19520625 -0.0098875 0.40000625 -0.14645 0.5465625L8.8383 7.98495Z"
                    strokeWidth="0.0625"
                  />
                </svg>
              </button>
            )}

            <button
              type="button"
              onClick={handleMicClick}
              className={`transition-all ${isListening ? "animate-pulse" : ""}`}
              aria-label="Busca por voz"
              title={isListening ? "Ouvindo... Clique para parar" : "Clique para falar"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 text-[#00c951]"
              >
                <path
                  d="M8 10.88841875c1.7462125 -0.002275 3.1612375 -1.41729375 3.16350625 -3.16350625V3.32350625c0 -2.43526875 -2.63625625 -3.9573125 -4.7452625 -2.739675 -0.97879375 0.56510625 -1.58175 1.6094625 -1.58175 2.739675v4.40140625c0.00226875 1.7462125 1.41729375 3.1612375 3.16350625 3.16350625ZM5.66175625 3.32350625c0 -1.79998125 1.9485375 -2.92496875 3.50736875 -2.024975 0.72345625 0.4176875 1.16911875 1.1896 1.16911875 2.024975v4.40140625c0 1.79998125 -1.9485375 2.92496875 -3.50736875 2.02498125 -0.72345625 -0.4176875 -1.16911875 -1.18960625 -1.16911875 -2.02498125Zm2.750875 9.748425v2.3554375c-0.0003875 0.31764375 -0.34449375 0.51575 -0.6193875 0.3565875 -0.1272625 -0.0736875 -0.20569375 -0.20953125 -0.205875 -0.3565875v-2.3554375c-2.792325 -0.21843125 -4.9479125 -2.5461625 -4.95158125 -5.34701875 0.00039375 -0.31764375 0.34449375 -0.51575 0.6193875 -0.3565875 0.1272625 0.07368125 0.20569375 0.20953125 0.205875 0.3565875 -0.00366875 2.80085625 -2.15925625 5.1285875 -4.95158125 5.34701875Z"
                  strokeWidth="0.0625"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleImageClick}
              className="transition-colors"
              aria-label="Busca por imagem"
              title="Buscar por imagem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 text-[#00c951]"
              >
                <path
                  d="M14.14901875 2.92705625h-2.212875l-1.092225 -1.63948125c-0.085675 -0.12841875 -0.22993125 -0.20545 -0.3843125 -0.205225H5.54039375c-0.15438125 -0.000225 -0.2986375 0.07680625 -0.3843125 0.205225L4.0630875 2.92705625H1.85098125C0.917075 2.92705625 0.16 3.6841375 0.16 4.6180375v8.60863125c0 0.9339 0.757075 1.69098125 1.69098125 1.69098125h12.2980375c0.93390625 0 1.69098125 -0.75708125 1.69098125 -1.69098125V4.6180375c0 -0.9339 -0.757075 -1.69098125 -1.69098125 -1.69098125Zm0.76863125 10.2996125c0 0.4245 -0.34413125 0.768625 -0.76863125 0.768625H1.85098125c-0.4245 0 -0.76863125 -0.344125 -0.76863125 -0.768625V4.6180375c0 -0.4245125 0.34411875 -0.76864375 0.76863125 -0.768625h2.45960625c0.15438125 0.000225 0.2986375 -0.07680625 0.3843125 -0.205225l1.09221875 -1.63948125h4.42499375l1.0929875 1.63948125c0.08568125 0.128425 0.22993125 0.20545625 0.3843125 0.205225h2.45960625c0.4245 0 0.76863125 0.344125 0.76863125 0.768625Z"
                  strokeWidth="0.0625"
                />
              </svg>
            </button>
          </div>
        </div>

        {showResults && (
          <div className="fixed left-0 right-0 rounded-b-md border-x border-b border-[#00c951] bg-white shadow-xl z-[100] max-h-[600px] overflow-y-auto">
            <div className="p-6">
              <SearchResults query={query} isPixDetected={isPixDetected} resultType={resultType} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
