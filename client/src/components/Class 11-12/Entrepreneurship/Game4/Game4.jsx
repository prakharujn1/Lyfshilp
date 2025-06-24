// PitchArenaPro.jsx
import React, { useState } from 'react';

const initialDeck = {
  slide1: { problem: '', audience: '' },
  slide2: { solutionText: '', image: '' },
  slide3: { steps: [''] },
  slide4: { whyNow: '' },
};

export default function PitchArenaPro() {
  const [step, setStep] = useState(1);
  const [deck, setDeck] = useState(initialDeck);
  const [videoType, setVideoType] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [submission, setSubmission] = useState({ name: '', tagline: '', confirm: false });

  const handleDeckChange = (field, value, slide = 'slide1') => {
    setDeck(prev => ({ ...prev, [slide]: { ...prev[slide], [field]: value } }));
  };

  const handleStep3Submit = () => {
    alert('🎉 Pitch submitted! Badge Unlocked: 💼 Boardroom Ready');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">🎯 Pitch Arena Pro</h1>

      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Step 1: Build Your Pitch Deck</h2>

          {/* Slide 1 */}
          <div>
            <h3 className="font-bold">Slide 1: Problem + Audience</h3>
            <input
              className="w-full p-2 border rounded"
              placeholder="What problem are you solving?"
              value={deck.slide1.problem}
              onChange={e => handleDeckChange('problem', e.target.value, 'slide1')}
            />
            <input
              className="w-full p-2 border rounded mt-2"
              placeholder="Who is your target audience?"
              value={deck.slide1.audience}
              onChange={e => handleDeckChange('audience', e.target.value, 'slide1')}
            />
          </div>

          {/* Slide 2 */}
          <div>
            <h3 className="font-bold">Slide 2: Your Solution</h3>
            <input
              className="w-full p-2 border rounded"
              placeholder="Describe your solution"
              value={deck.slide2.solutionText}
              onChange={e => handleDeckChange('solutionText', e.target.value, 'slide2')}
            />
            <input
              type="url"
              className="w-full p-2 border rounded mt-2"
              placeholder="Image URL"
              value={deck.slide2.image}
              onChange={e => handleDeckChange('image', e.target.value, 'slide2')}
            />
          </div>

          {/* Slide 3 */}
          <div>
            <h3 className="font-bold">Slide 3: How it Works</h3>
            {deck.slide3.steps.map((step, i) => (
              <input
                key={i}
                className="w-full p-2 border rounded mt-2"
                placeholder={`Step ${i + 1}`}
                value={step}
                onChange={e => {
                  const newSteps = [...deck.slide3.steps];
                  newSteps[i] = e.target.value;
                  setDeck(prev => ({ ...prev, slide3: { steps: newSteps } }));
                }}
              />
            ))}
            <button
              className="text-blue-500 text-sm mt-2"
              onClick={() => setDeck(prev => ({
                ...prev,
                slide3: { steps: [...prev.slide3.steps, ''] },
              }))}
            >
              ➕ Add Step
            </button>
          </div>

          {/* Slide 4 */}
          <div>
            <h3 className="font-bold">Slide 4: Why Now?</h3>
            <textarea
              className="w-full p-2 border rounded"
              placeholder="What makes this the right time for your idea?"
              value={deck.slide4.whyNow}
              onChange={e => handleDeckChange('whyNow', e.target.value, 'slide4')}
            />
          </div>

          <button className="bg-indigo-600 text-white px-6 py-2 rounded" onClick={() => setStep(2)}>
            🎥 Next: Record Elevator Pitch
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Step 2: Record a 90-Second Pitch</h2>
          <p className="text-gray-600">Choose one option below:</p>

          <select
            className="w-full p-2 border rounded"
            value={videoType}
            onChange={e => setVideoType(e.target.value)}
          >
            <option value="">-- Select Video Option --</option>
            <option value="upload">Upload Video (MP4, Max 50MB)</option>
            <option value="link">Paste Loom / YouTube Link</option>
          </select>

          {videoType === 'upload' && (
            <input type="file" accept="video/mp4" className="w-full" />
          )}

          {videoType === 'link' && (
            <input
              type="url"
              className="w-full p-2 border rounded"
              placeholder="Paste video link here"
              value={videoURL}
              onChange={e => setVideoURL(e.target.value)}
            />
          )}

          <button className="bg-green-600 text-white px-6 py-2 rounded" onClick={() => setStep(3)}>
            ✅ Next: Submit & Earn Badge
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Step 3: Submit & Earn Badge</h2>
          <input
            className="w-full p-2 border rounded"
            placeholder="Team or Student Name"
            value={submission.name}
            onChange={e => setSubmission(prev => ({ ...prev, name: e.target.value }))}
          />
          <input
            className="w-full p-2 border rounded"
            placeholder="1-line Tagline"
            value={submission.tagline}
            onChange={e => setSubmission(prev => ({ ...prev, tagline: e.target.value }))}
          />

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={submission.confirm}
              onChange={e => setSubmission(prev => ({ ...prev, confirm: e.target.checked }))}
            />
            <span>I confirm this is my original work</span>
          </label>

          <button
            className="bg-purple-600 text-white px-6 py-2 rounded disabled:opacity-50"
            onClick={handleStep3Submit}
            disabled={!submission.confirm || !submission.name || !submission.tagline}
          >
            🎖️ Submit Final Pitch
          </button>
        </div>
      )}
    </div>
  );
}
