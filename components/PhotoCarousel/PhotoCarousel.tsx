'use client'
import { useState } from 'react'
import styles from './PhotoCarousel.module.css'

const photos = [
  '/photosAboutMeSlider/IMG_5500.JPG',
  '/photosAboutMeSlider/IMG_6282.JPG',
  '/photosAboutMeSlider/IMG_7938.JPG',
  '/photosAboutMeSlider/IMG_7942.JPG',
  '/photosAboutMeSlider/IMG_9666.jpg',
]

const getPos = (i: number, current: number, n: number) => {
  let pos = i - current
  if (pos > n / 2) pos -= n
  if (pos < -n / 2) pos += n
  return pos
}

const posClass = (pos: number, styles: Record<string, string>) => {
  switch (pos) {
    case -2: return styles.farLeft
    case -1: return styles.left
    case  0: return styles.center
    case  1: return styles.right
    case  2: return styles.farRight
    default:  return styles.hidden
  }
}

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0)
  const n = photos.length

  const prev = () => setCurrent(i => (i - 1 + n) % n)
  const next = () => setCurrent(i => (i + 1) % n)

  return (
    <div className={styles.carousel}>

      <div className={styles.track}>
        {photos.map((src, i) => {
          const pos = getPos(i, current, n)
          const cls = posClass(Math.max(-2, Math.min(2, pos)), styles)
          return (
            <div
              key={i}
              className={`${styles.slide} ${cls}`}
              onClick={pos < 0 ? prev : pos > 0 ? next : undefined}
            >
              <img src={src} alt="" />
            </div>
          )
        })}
      </div>

      <div className={styles.dots}>
        {photos.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Фото ${i + 1}`}
          />
        ))}
      </div>

      <div className={styles.arrows}>
        <button className={styles.arrow} onClick={prev} aria-label="Попередній">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className={styles.arrow} onClick={next} aria-label="Наступний">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

    </div>
  )
}