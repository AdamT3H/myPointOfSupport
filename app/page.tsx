import styles from './page.module.css'
import FAQ from '@/components/Faq/Faq'

export default function Home() {
  return (
    <>
      <div className={styles.FirstBlock}>
        <div className="container">
          <div className={styles.FirstBlockMainTextBlock}>

            <div className={styles.FirstBlockTitle}>
              Моя точка опори
            </div>

            <a href="#pricing" className={styles.FirstBlockBtn}>
              Дізнатись більше
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            
          </div>
        </div>
      </div>

      <div className={styles.SecondBlock}>
        <div className="container">
          <div className={styles.SecondBlockMainTextBlock}>

            <div className={styles.SecondBlockTitle}>
              Є таке відчуття...
            </div>

            <div className={styles.SecondBlockLine}></div>

            <ul className={styles.SecondBlockList}>
              <li className={styles.SecondBlockItem}>
                Тривога не відпускає навіть у спокійні моменти
              </li>

              <li className={styles.SecondBlockItem}>
                Ви живете так, ніби постійно потрібно щось встигнути
              </li>

              <li className={styles.SecondBlockItem}>
                Зупинитися страшно, продовжувати - виснажливо
              </li>

              <li className={styles.SecondBlockItem}>
                Бути собою стає дедалі складніше
              </li>

              <li className={styles.SecondBlockItem}>
                Зовні життя триває. Всередині - бракує опори
              </li>
            </ul>

            <div className={styles.SecondBlockSummary}>
              Якщо хоч щось із цього — про Вас, вам точно сюди
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ThirdBlock}>
        <div className="container">
          <div className={styles.ThirdBlockHeader}>
            <div className={styles.ThirdBlockTitleUpper}>
              Це не ще одна теорія
            </div>
            <div className={styles.ThirdBlockTitleLower}>
              Це — щоденна практика повернення до себе
            </div>
            <div className={styles.ThirdBlockSubtitle}>
              21 день практик, щоденний супровід, мультимодальний підхід, без теорії — тільки практика
            </div>
            <div className={styles.SecondBlockLine}></div>
          </div>

          <div className={styles.ThirdBlockMethods}>
            <div className={styles.ThirdBlockMethodCard}>
              <div className={styles.ThirdBlockMethodName}>
                КПТ
              </div>
              <div className={styles.ThirdBlockMethodDesc}>
                Допомагає змінювати думки та поведінкові реакції
              </div>
            </div>

            <div className={styles.ThirdBlockMethodCard}>
              <div className={styles.ThirdBlockMethodName}>
                Метафоричні карти
              </div>
              <div className={styles.ThirdBlockMethodDesc}>
                Допомагають побачити внутрішні процеси через образи
              </div>
            </div>

            <div className={styles.ThirdBlockMethodCard}>
              <div className={styles.ThirdBlockMethodName}>
                EFT
              </div>
              <div className={styles.ThirdBlockMethodDesc}>
                Допомагає краще розуміти та проживати емоції
              </div>
            </div>

            <div className={styles.ThirdBlockMethodCard}>
              <div className={styles.ThirdBlockMethodName}>
                Тілесно-орієнтовані практики
              </div>
              <div className={styles.ThirdBlockMethodDesc}>
                Допомагає відновити зв’язок між думками, емоціями та тілом
              </div>
            </div>

            <div className={styles.ThirdBlockMethodCard}>
              <div className={styles.ThirdBlockMethodName}>
                Арт-терапія
              </div>
              <div className={styles.ThirdBlockMethodDesc}>
                Допомагає виразити внутрішній світ через творчість
              </div>
            </div>

            <div className={styles.ThirdBlockMethodCard}>
              <div className={styles.ThirdBlockMethodName}>
                Коучингові інструменти
              </div>
              <div className={styles.ThirdBlockMethodDesc}>
                Допомагають прояснити цілі та знайти власні рішення
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.ForthBlock}>

          <div className={styles.ForthBlockHeader}>
            <div className={styles.ForthBlockLabel}>
              Привіт, я Тетяна
            </div>

            <div className={styles.ForthBlockTitle}>
              Я у психології з 2006 року <br /> Практикую понад 7 років
            </div>

            <div className={styles.ForthBlockTitle}>

            </div>

            <div className={styles.SecondBlockLine}></div>

            <div className={styles.ForthBlockText}>
              Мій професійний шлях сформувався через навчання, практику та власний досвід проживання змін і внутрішніх трансформацій
            </div>

            <div className={styles.ForthBlockText}>
              У роботі спираюся на глибоке розуміння психічних процесів, точність і уважність до індивідуального темпу людини
            </div>

            <div className={styles.ForthBlockText}>
              Мій підхід — інтегративний, структурний і дбайливий. Я працюю з тим, як людина вибудовує контакт із собою, своїми станами та внутрішньою опорою
            </div>
          </div>

          <div className={styles.ForthBlockSlider}>
            <div className={styles.slide}>
              <img src="/photosAboutMeSlider/IMG_5500.JPG" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.FifthBlock}>
          <div className={styles.FifthBlockHeader}>
            <div className={styles.FifthBlockTitle}>
              Через 21 день ви помітите зміни у своєму стані
            </div>
          </div>

          <div className={styles.SecondBlockLine}></div>

          <div className={styles.FifthBlockList}>
            <div className={styles.FifthBlockListItem}>
              <div className={styles.FifthBlockListItemImage}>
                <span className={styles.FifthBlockGlyph}>✦</span>
              </div>
              <div className={styles.FifthBlockListItemText}>
                Може з’явитися більше стабільності у сні та загальному самопочутті
              </div>
            </div>

            <div className={styles.FifthBlockListItem}>
              <div className={styles.FifthBlockListItemImage}>
                <span className={styles.FifthBlockGlyph}>✦</span>
              </div>
              <div className={styles.FifthBlockListItemText}>
                Вам стане легше говорити «ні» без провини<br />Поступово формуються чіткіші особисті межі
              </div>
            </div>

            <div className={styles.FifthBlockListItem}>
              <div className={styles.FifthBlockListItemImage}>
                <span className={styles.FifthBlockGlyph}>✦</span>
              </div>
              <div className={styles.FifthBlockListItemText}>
                Ви почнете краще відчувати своє тіло і його сигнали<br />З’являється більше довіри до себе
              </div>
            </div>

            <div className={styles.FifthBlockListItem}>
              <div className={styles.FifthBlockListItemImage}>
                <span className={styles.FifthBlockGlyph}>✦</span>
              </div>
              <div className={styles.FifthBlockListItemText}>
                Зменшується постійний самоконтроль і внутрішня напруга<br />Рішення частіше приймаються з ясності, а не зі страху
              </div>
            </div>

            <div className={styles.FifthBlockListItem}>
              <div className={styles.FifthBlockListItemImage}>
                <span className={styles.FifthBlockGlyph}>✦</span>
              </div>
              <div className={styles.FifthBlockListItemText}>
                Життя поступово стає більш опорним зсередини, а не керованим лише «треба» чи «як правильно».
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <div className={styles.SixthBlock}>
        <div className="container">
          <div className={styles.SixthBlockHeader}>
            <div className={styles.SixthBlockTitle}>
              21 день — 3 розділи — повне повернення до себе
            </div>

            <div className={styles.SecondBlockLine}></div>

            <div className={styles.SixthBlockText}>
              Щоденні практики. Живий супровід. Реальні зміни — не теорія
            </div>

            <div className={styles.SixthBlockText}>
              3 розділи по 7 днів. Кожен розділ має назву, список практик і сенс — що саме змінюється всередині. Атмосферний фон між блоками
            </div>
          </div>

          

          <div className={styles.SixthBlockCardsList}>
            <div className={styles.SixthBlockCardsListItem}>
              <div className={styles.SixthBlockCardsListItemTitle}>
                РОЗДІЛ 1 (1 - 7 день)
              </div>
              
              <div className={styles.SixthBlockCardsListItemTextBlock}>
                <div className={styles.SixthBlockCardsListItemLeft}>
                  <div className={styles.SixthBlockCardsListItemLeftTitle}>ПОВЕРНЕННЯ ДО СЕБЕ</div>
                  <div className={styles.SixthBlockCardsListItemLeftDesc}>Усвідомлення свого стану, ресурсу та внутрішніх опор</div>
                  <div className={styles.SixthBlockCardsListItemLeftSense}>Сенс розділу: побачити себе справжню, свій стан, свої установки, емоції та внутрішні опори</div>
                </div>

                <div className={styles.SixthBlockCardsListItemRight}>

                  <div className={styles.SixthBlockCardsListItemPracticesLabel}>Практики:</div>

                  <ul className={styles.SixthBlockPracticesList}>
                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Колесо балансу — визначення точки А і точки Б
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Розподіл ресурсу — що забирає енергію, а що наповнює
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Арт-терапія — формування наміру через образ
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      5 прикметників про своє дитинство
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      «Повинна» → «можу, хочу, обираю»
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Експресивні листи
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Вчимося віддавати і дякувати
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Хто з недоброзичливців став внеском у твій розвиток
                    </li>
                  </ul>

                </div>
              </div>

            </div>

            <div className={styles.SixthBlockCardsListItem}>
              <div className={styles.SixthBlockCardsListItemTitle}>
                РОЗДІЛ 2 (8 - 14 день)
              </div>
              
              <div className={styles.SixthBlockCardsListItemTextBlock}>
                <div className={styles.SixthBlockCardsListItemLeft}>
                  <div className={styles.SixthBlockCardsListItemLeftTitle}>ВНУТРІШНЯ ОПОРА</div>
                  <div className={styles.SixthBlockCardsListItemLeftDesc}>Самоцінність, стабільність і робота зі страхами</div>
                  <div className={styles.SixthBlockCardsListItemLeftSense}>Сенс розділу: навчитися опиратися на себе, чути свої бажання й не дозволяти страху керувати життям</div>
                </div>

                <div className={styles.SixthBlockCardsListItemRight}>

                  <div className={styles.SixthBlockCardsListItemPracticesLabel}>Практики:</div>

                  <ul className={styles.SixthBlockPracticesList}>
                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Енергія перетворення — вивільнення негативних емоцій
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Міні-тест на самоцінність
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Повернення своєї цінності
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Дії чи очікування? Запит до Всесвіту
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Підвищення впевненості
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Структурування хаосу
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Розмотування страху — пошук кореневого страху
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Страх проявлення — трансформація страху в дію
                    </li>
                  </ul>

                </div>
              </div>

            </div>

            <div className={styles.SixthBlockCardsListItem}>
              <div className={styles.SixthBlockCardsListItemTitle}>
                РОЗДІЛ 3 (15 - 21 день)
              </div>
              
              <div className={styles.SixthBlockCardsListItemTextBlock}>
                <div className={styles.SixthBlockCardsListItemLeft}>
                  <div className={styles.SixthBlockCardsListItemLeftTitle}>НОВА Я</div>
                  <div className={styles.SixthBlockCardsListItemLeftDesc}>Вихід у зміни, проявленість і дії</div>
                  <div className={styles.SixthBlockCardsListItemLeftSense}>Сенс розділу: не просто усвідомити зміни, а почати жити й діяти по-новому</div>
                </div>

                <div className={styles.SixthBlockCardsListItemRight}>

                  <div className={styles.SixthBlockCardsListItemPracticesLabel}>Практики:</div>

                  <ul className={styles.SixthBlockPracticesList}>
                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Розширюємо рамки — вихід із внутрішнього «кутка»
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Робити по-новому — ламати старі сценарії
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Вихід за межі звичного — створення плану змін
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Усвідомлення власного потенціалу
                    </li>

                    <li className={styles.SixthBlockPracticesItem}>
                      <span className={styles.SixthBlockPracticesDot} />
                      Я обираю і дію — завершення внутрішнього процесу й перехід у новий етап
                    </li>
                  </ul>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.SeventhBlock} id="pricing">
          <div className={styles.SeventhBlockHeader}>
            <div className={styles.SeventhBlockTitle}>
              Обери свій формат участі
            </div>
          </div>

          <div className={styles.SecondBlockLine}></div>

          <div className={styles.PricingGrid}>
            <div className={styles.Card}>
              <div className={styles.CardTitle}>Перший крок</div>

              <div className={styles.PriceRow}>
                <span className={styles.Price}>$25</span>
              </div>

              <div className={styles.Divider} />

              <div className={styles.GenderTags}>
                <span className={styles.GenderTag}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="5" />
                    <line x1="12" y1="13" x2="12" y2="21" />
                    <line x1="9" y1="18" x2="15" y2="18" />
                  </svg>
                  для жінок
                </span>
                <span className={styles.GenderTag}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="10" cy="14" r="5" />
                    <line x1="19" y1="5" x2="14.5" y2="9.5" />
                    <polyline points="15 5 19 5 19 9" />
                  </svg>
                  для чоловіків
                </span>
              </div>

              <ul className={styles.FeatureList}>
                <li className={styles.FeatureItem}>
                  <svg className={styles.CheckIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><span className={styles.FeatureItemBold}>Онлайн</span>-щоденник</span>
                </li>
              </ul>

              <a
                className={styles.Cta}
                href="https://secure.wayforpay.com/button/b455cb0d778e8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Обрати
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className={styles.Card}>
              <div className={styles.CardTitle}>Дотик до себе</div>

              <div className={styles.PriceRow}>
                <span className={styles.Price}>$39</span>
              </div>

              <div className={styles.Divider} />

              <div className={styles.GenderTags}>
                <span className={styles.GenderTag}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="5" />
                    <line x1="12" y1="13" x2="12" y2="21" />
                    <line x1="9" y1="18" x2="15" y2="18" />
                  </svg>
                  для жінок
                </span>
                <span className={styles.GenderTag}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="10" cy="14" r="5" />
                    <line x1="19" y1="5" x2="14.5" y2="9.5" />
                    <polyline points="15 5 19 5 19 9" />
                  </svg>
                  для чоловіків
                </span>
              </div>

              <ul className={styles.FeatureList}>
                <li className={styles.FeatureItem}>
                  <svg className={styles.CheckIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Щоденник <span className={styles.FeatureItemBold}>на друкованій основі</span></span>
                </li>
              </ul>

              <a
                className={styles.Cta}
                href="https://secure.wayforpay.com/button/b6cded784797b"
                target="_blank"
                rel="noopener noreferrer"
              >
                Обрати
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className={styles.Card}>
              <div className={styles.CardTitle}>Опора поруч</div>

              <div className={styles.PriceRow}>
                <span className={styles.Price}>$59</span>
              </div>

              <div className={styles.Divider} />

              <ul className={styles.FeatureList}>
                <li className={styles.FeatureItem}>
                  <svg className={styles.CheckIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><span className={styles.FeatureItemBold}>Онлайн</span>-щоденник</span>
                </li>

                <li className={styles.FeatureItem}>
                  <svg className={styles.CheckIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><span className={styles.FeatureItemBold}>Супровід</span> психолога</span>
                </li>

                <li className={styles.FeatureItem}>
                  <svg className={styles.CheckIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Чат
                </li>
              </ul>

              <a
                className={styles.Cta}
                href="https://secure.wayforpay.com/button/bf4afcaa456f1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Обрати
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className={`${styles.Card} ${styles.CardPopular}`}>
              <div className={styles.PopularBadge}>Популярний</div>
              <div className={styles.CardTitle}>Тепла присутність</div>

              <div className={styles.PriceRow}>
                <span className={styles.Price}>$79</span>
              </div>

              <div className={styles.Divider} />

              <ul className={styles.FeatureList}>
                <li className={styles.FeatureItem}>
                  <svg className={styles.CheckIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Щоденник <span className={styles.FeatureItemBold}>на друкованій основі</span></span>
                </li>

                <li className={styles.FeatureItem}>
                  <svg className={styles.CheckIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><span className={styles.FeatureItemBold}>Супровід</span> психолога</span>
                </li>

                <li className={styles.FeatureItem}>
                  <svg className={styles.CheckIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Чат
                </li>
              </ul>

              <a
                className={styles.Cta}
                href="https://secure.wayforpay.com/button/b17da718aa711"
                target="_blank"
                rel="noopener noreferrer"
              >
                Обрати
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className={`${styles.Card} ${styles.CardVIP}`}>
              <div className={styles.CardTitle}>VIP Пакет</div>

              <div className={styles.PriceRow}>
                <span className={styles.Price}>$550</span>
              </div>

              <div className={styles.Divider} />

              <ul className={styles.FeatureList}>
                <li className={styles.FeatureItem}>
                  <svg className={styles.CheckIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Персональний <span className={styles.FeatureItemBold}>супровід</span> психолога</span>
                </li>

                <li className={styles.FeatureItem}>
                  <svg className={styles.CheckIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Практики <span className={styles.FeatureItemBold}>онлайн</span></span>
                </li>

                <li className={styles.FeatureItem}>
                  <svg className={styles.CheckIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>5 індивідуальних сесій <span className={styles.FeatureItemBold}>онлайн</span></span>
                </li>
              </ul>

              <a
                className={styles.Cta}
                href="https://secure.wayforpay.com/button/b577c184a4377"
                target="_blank"
                rel="noopener noreferrer"
              >
                Обрати
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.Footnote}>
            <span>Розстрочка 0%</span>
            <span className={styles.FootnoteDot} />
            <span>Перші учасниці — спеціальна ціна</span>
          </div>
        </div>
      </div>

      <FAQ />

      <div className={styles.LastBlock}>
        <div className="container">
          <div className={styles.LastBlockHeader}>
            <div className={styles.LastBlockTitle}>
              Ви готові повернутись до себе?
            </div>

            <div className={styles.LastBlockSecond}>
              Це і є той момент, коли Ви вибираєте себе
            </div>

            <div className={styles.LastBlockSecond}>
              Не «потім, коли буде час». Прямо зараз
            </div>

            <a href="#pricing" className={styles.FirstBlockBtn}>
              Придбати курс
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href="/docs/privacy-policy.pdf" target="_blank" rel="noopener" className={styles.LastBlockPol}>
              Політика конфіденційності
            </a>
            <a href="/docs/public-offer.pdf" target="_blank" rel="noopener" className={styles.LastBlockPol}>
              Публічна оферта
            </a>
          </div>
        </div>
      </div> 
    </>
  );
}
