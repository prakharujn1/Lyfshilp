import React, { useState, useRef, useEffect } from "react";
import { ChromePicker } from "react-color";
import confetti from "canvas-confetti";

export default function BrandCreatorGame() {
  const [brand, setBrand] = useState({
    name: "",
    product: "",
    audience: "",
    slogan: "",
    logo: "",
    color: "",
    font: "",
    emojiStyle: "",
    tone: "",
  });

  const checkSumbit = () => {
    let x = Object.entries(brand)
      .filter(([key]) => key !== "color")
      .every(([, val]) => val !== "");

    return !x;
  };

  const [completed, setCompleted] = useState(false);

  const cardRef = useRef();
  const canvasRef = useRef(null);

  const handleChange = (e) => {
    setBrand({ ...brand, [e.target.name]: e.target.value });
  };

  const handleColorChange = (color) => {
    setBrand({ ...brand, color: color.hex });
  };

  const handleFinish = () => {
    const allFilled = Object.values(brand).every((val) => val !== "");
    setCompleted(allFilled);
  };

  const saveAsImage = async () => {
    if (cardRef.current) {
      domtoimage
        .toPng(cardRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `${brand.name}-brand-card.png`;
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          setError("Failed to dwwonload image. Try again later");
          console.error("Download failed:", error);
        });
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBrand((prev) => ({ ...prev, logo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    const myCanvas = canvasRef.current;
    const myConfetti = confetti.create(myCanvas, {
      resize: true,
      useWorker: true,
    });

    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
    };

    const shoot = () => {
      myConfetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      });

      myConfetti({
        ...defaults,
        particleCount: 30,
        scalar: 0.75,
        shapes: ["circle"],
      });
    };

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 300);
    setTimeout(shoot, 500);
    setTimeout(shoot, 700);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-4 md:p-8 border-4 border-dashed border-yellow-300">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-yellow-600 animate-bounce">
          🎯 Build-A-Brand Game!
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Brand Name"
            className="w-full p-3 rounded-xl border border-yellow-400"
            value={brand.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="product"
            placeholder="Product or Service"
            className="w-full p-3 rounded-xl border border-yellow-400"
            value={brand.product}
            onChange={handleChange}
          />
          <input
            type="text"
            name="audience"
            placeholder="Target Audience"
            className="w-full p-3 rounded-xl border border-yellow-400"
            value={brand.audience}
            onChange={handleChange}
          />
          <textarea
            name="slogan"
            placeholder="Slogan or Catchphrase"
            className="w-full p-3 rounded-xl border border-yellow-400"
            value={brand.slogan}
            onChange={handleChange}
          />

          <label className="block font-bold text-yellow-700 mt-4">
            Upload Logo
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-3 rounded-xl border border-yellow-400"
            onChange={handleLogoUpload}
          />

          <label className="block font-bold text-yellow-700 mt-4">
            Pick Background Color 🎨
          </label>
          <div className="flex space-x-3">
            <div className=" ">
              <ChromePicker
                color={brand.color}
                onChangeComplete={handleColorChange}
              />
            </div>
            <div>
              <button
                onClick={() =>
                  setBrand({
                    ...brand,
                    color: "",
                  })
                }
                className="p-3 bg-pink-200 rounded-2xl text-lg"
              >
                Use original color
              </button>
            </div>
          </div>

          <select
            name="font"
            className="w-full p-3 rounded-xl border border-yellow-400"
            value={brand.font}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Font
            </option>
            <option>Comic Sans MS</option>
            <option>Verdana</option>
            <option>Arial</option>
            <option>Cursive</option>
            <option>Georgia</option>
            <option>Impact</option>
            <option>Trebuchet MS</option>
            <option>Lucida Handwriting</option>
          </select>

          <select
            name="emojiStyle"
            className="w-full p-3 rounded-xl border border-yellow-400"
            value={brand.emojiStyle}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Emoji Style
            </option>
            <option value="🎉">🎉 Party</option>
            <option value="🤖">🤖 Robot</option>
            <option value="🍭">🍭 Sweet</option>
            <option value="🦄">🦄 Unicorn</option>
          </select>

          <select
            name="tone"
            className="w-full p-3 rounded-xl border border-yellow-400"
            value={brand.tone}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Tone
            </option>
            <option>Funny</option>
            <option>Cool</option>
            <option>Smart</option>
            <option>Inspiring</option>
          </select>

          <button
            disabled={checkSumbit()}
            className={`w-full ${
              checkSumbit() ? "cursor-not-allowed" : "cursor-pointer"
            } bg-yellow-400 text-white font-bold py-3 rounded-xl hover:bg-yellow-500 transition`}
            onClick={handleClick}
          >
            Finish & Celebrate!
          </button>
        </div>

        <div
          ref={cardRef}
          className={`mt-10 p-6 md:p-8 relative ${
            !brand.color &&
            "bg-gradient-to-br from-yellow-200 via-pink-100 to-purple-200"
          } rounded-3xl border-8  shadow-2xl transition-all duration-500 hover:shadow-pink-300`}
          style={{
            backgroundColor: brand.color,
            fontFamily: brand.font || "Comic Sans MS",
            border: "8px solid",
            borderImage:
              "linear-gradient(45deg, #f472b6, #a855f7, #3b82f6, #10b981) 1",
          }}
        >
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
          />
          <h2 className="text-2xl md:text-4xl font-black mb-6 text-center">
            <span className="inline-block hover:animate-spin transition-transform duration-300">
              {brand.emojiStyle}
            </span>
            <span className="hover:animate-pulse">{brand.name}</span>
            <span className="inline-block hover:animate-spin transition-transform duration-300">
              {brand.emojiStyle}
            </span>
          </h2>

          <p className="text-lg md:text-2xl italic text-center text-purple-800 mb-6 font-bold hover:text-pink-600 transition-colors duration-300 transform hover:scale-105">
            <span className="inline-block ">{`${brand.slogan && "''"}`}</span>
            <span className="inline-block">{brand.slogan}</span>
            <span className="inline-block animate-pulse">{`${
              brand.slogan && "''"
            }`}</span>
          </p>

          {brand.logo && (
            <div className="mt-8 absolute top-0 left-4 md:left-10">
              <img
                src={brand.logo}
                alt="Brand Logo"
                className="w-24 h-24 md:w-32 md:h-32 object-contain bg-white rounded-full shadow-2xl hover:rotate-12 hover:scale-125 transition-all duration-500 hover:shadow-pink-400 animate-pulse"
                style={{
                  borderImage:
                    "linear-gradient(45deg, #fde047, #f472b6, #a855f7) 1",
                }}
              />
            </div>
          )}

          <div className="text-md md:text-xl mt-24 grid gap-6 md:grid-cols-3 font-bold">
            <div className="transform hover:scale-105 transition-all duration-300 hover:rotate-1 p-3 rounded-2xl hover:bg-yellow-100 hover:shadow-lg text-center">
              <span className="text-3xl animate-bounce inline-block">🎁</span>
              <div>What we offer:</div>
              <div>
                <span
                  className={`text-pink-600  hover:text-pink-800 ${
                    brand.product && "bg-pink-100"
                  } px-3 py-1 rounded-full hover:bg-pink-200 transition-all duration-300`}
                >
                  {brand.product}
                </span>
              </div>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300 hover:-rotate-1 p-3 rounded-2xl hover:bg-green-100 hover:shadow-lg text-center">
              <span className="text-3xl animate-bounce inline-block">🧸</span>
              <div>We bring it for:</div>
              <div>
                <span
                  className={`text-green-600 ${
                    brand.audience && "bg-green-100"
                  } px-3 py-1 rounded-full hover:text-green-800 hover:bg-green-200 transition-all duration-300`}
                >
                  {brand.audience}
                </span>
              </div>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300 hover:rotate-1 p-3 rounded-2xl hover:bg-purple-100 hover:shadow-lg text-center">
              <span className="text-3xl animate-bounce inline-block">🌈</span>
              <div>Tone:</div>
              <div>
                <span
                  className={`text-purple-600 ${
                    brand.tone && "bg-purple-100"
                  } px-3 py-1 rounded-full hover:text-purple-800 hover:bg-purple-200 transition-all duration-300`}
                >
                  {brand.tone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
