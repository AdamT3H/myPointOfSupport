'use client'

import { useState } from 'react'
import styles from './Faq.module.css'

const faqs = [
  {
    question: 'Скільки часу займає курс?',
    answer: 'До 30 хвилин на день. Курс спеціально побудований так, щоб не стати ще одним пунктом у списку справ — а вбудуватись у твоє звичне життя.',
  },
  {
    question: 'Чи підходить курс чоловікам?',
    answer: 'Так. У тарифах «Перший крок» і «Дотик до себе» є окрема версія для чоловіків.',
  },
  {
    question: 'Я вже пробувала — і не спрацювало',
    answer: 'Тут не буде ще однієї теорії. Ми йдемо через стан, тіло і реальні зміни в рішеннях — і ти не залишаєшся сама з цим процесом.',
  },
  {
    question: 'Це схоже на терапію?',
    answer: 'Ні, але використовує терапевтичні інструменти. Курс — це структурована практика для самостійної роботи з підтримкою.',
  },
  {
    question: 'Чи потрібен якийсь досвід?',
    answer: 'Ні. Курс розроблений так, щоб бути доступним навіть якщо ти вперше звертаєшся до психологічних практик.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <div className={styles.FAQSection}>
      <div className="container">
        <div className={styles.FAQHeader}>
          <div className={styles.FAQTitle}>Питання та відповіді</div>
        </div>

        <div className={styles.FAQList}>
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`${styles.FAQItem} ${open === i ? styles.FAQItemOpen : ''}`}
            >
              <button
                className={styles.FAQQuestion}
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span>{item.question}</span>
                <svg
                  className={styles.FAQIcon}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 6l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className={styles.FAQAnswerWrap}>
                <div className={styles.FAQAnswer}>{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}