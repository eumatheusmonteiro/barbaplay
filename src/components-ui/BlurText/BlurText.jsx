export default function BlurText({ text, highlight, className = '' }) {
  const words = text.split(' '); const highlightWords = new Set(highlight.split(' '))
  return <h1 className={`${className} blur-text`} aria-label={text}>{words.map((word, index) => <span aria-hidden="true" className={highlightWords.has(word) ? 'blur-text__highlight' : ''} style={{ '--delay': `${index * 90}ms` }} key={`${word}-${index}`}>{word}&nbsp;</span>)}</h1>
}
