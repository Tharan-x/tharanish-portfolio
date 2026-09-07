import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import './SentimentInteractiveDemo.css';

// Lightweight VADER-like sentiment engine simulation
function analyzeSentiment(text: string) {
  if (!text.trim()) return { pos: 0, neu: 1, neg: 0, score: 0, label: 'Neutral', emoji: '😐' };

  const positiveWords = [
    'love', 'great', 'awesome', 'good', 'fantastic', 'amazing', 'winner', 'happy',
    'excited', 'best', 'brilliant', 'wonderful', 'build', 'super', 'praise', 'nice', '❤️', '🚀', '🔥', '✨', '🎉'
  ];
  const negativeWords = [
    'bad', 'terrible', 'worst', 'hate', 'fail', 'bug', 'broken', 'slow', 'horrible',
    'disappointed', 'sad', 'annoyed', 'angry', 'error', 'crap', 'poor', '😡', '💔', '💩'
  ];

  const lower = text.toLowerCase();
  let posCount = 0;
  let negCount = 0;

  positiveWords.forEach((word) => {
    if (lower.includes(word)) posCount++;
  });

  negativeWords.forEach((word) => {
    if (lower.includes(word)) negCount++;
  });

  const total = Math.max(1, posCount + negCount);
  const score = Number(((posCount - negCount) / total).toFixed(2));

  if (score > 0.15) {
    return { pos: Math.round((posCount / total) * 100), neu: 20, neg: Math.round((negCount / total) * 100), score, label: 'Positive', emoji: '😊' };
  } else if (score < -0.15) {
    return { pos: Math.round((posCount / total) * 100), neu: 20, neg: Math.round((negCount / total) * 100), score, label: 'Negative', emoji: '😠' };
  } else {
    return { pos: 15, neu: 70, neg: 15, score: 0.0, label: 'Neutral', emoji: '😐' };
  }
}

export default function SentimentInteractiveDemo() {
  const [inputText, setInputText] = useState(
    'Just tried out the new Uzhavan AI hackathon app! Absolutely amazing performance and super helpful for farmers! 🚀🎉'
  );

  const result = analyzeSentiment(inputText);

  return (
    <div className="sentiment-demo-card">
      <div className="sentiment-header">
        <div className="sentiment-badge">
          <Sparkles size={14} />
          <span>VADER NLP Classifier Demo</span>
        </div>
        <h4>Interactive Sentiment Analysis Simulator</h4>
      </div>

      <div className="sentiment-input-group">
        <textarea
          rows={3}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type social media text or emojis here..."
        />
        <div className="sentiment-quick-samples">
          <button
            onClick={() =>
              setInputText('The AI hackathon pitch went fantastically! We won 1st prize! 🎉🔥')
            }
          >
            Positive Sample
          </button>
          <button
            onClick={() =>
              setInputText('Server deployment failed due to network API timeouts. Very frustrating error.')
            }
          >
            Negative Sample
          </button>
          <button
            onClick={() =>
              setInputText('Processing the dataset using Pandas and SQL queries today.')
            }
          >
            Neutral Sample
          </button>
        </div>
      </div>

      <div className="sentiment-output">
        <div className="sentiment-score-badge">
          <span className="sentiment-emoji">{result.emoji}</span>
          <div>
            <span className="sentiment-label">{result.label} Sentiment</span>
            <span className="sentiment-score-val">VADER Score: {result.score}</span>
          </div>
        </div>

        <div className="sentiment-bars">
          <div className="bar-row">
            <span className="bar-label">Positive</span>
            <div className="bar-track">
              <div className="bar-fill bar-fill--pos" style={{ width: `${result.pos}%` }}></div>
            </div>
            <span className="bar-val">{result.pos}%</span>
          </div>

          <div className="bar-row">
            <span className="bar-label">Neutral</span>
            <div className="bar-track">
              <div className="bar-fill bar-fill--neu" style={{ width: `${result.neu}%` }}></div>
            </div>
            <span className="bar-val">{result.neu}%</span>
          </div>

          <div className="bar-row">
            <span className="bar-label">Negative</span>
            <div className="bar-track">
              <div className="bar-fill bar-fill--neg" style={{ width: `${result.neg}%` }}></div>
            </div>
            <span className="bar-val">{result.neg}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
