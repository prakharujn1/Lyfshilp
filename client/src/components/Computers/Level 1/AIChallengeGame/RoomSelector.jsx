import React from 'react';

const roomEmojis = {
  Home: '🏠',
  School: '🏫',
  Playground: '🎮',
};

const rooms = ['Home', 'School', 'Playground'];

export default function RoomSelector({ selected, onSelect }) {
  return (
    <div className="flex justify-center gap-4 mb-6">
      {rooms.map((room) => {
        const isActive = selected === room;

        return (
          <button
            key={room}
            onClick={() => onSelect(room)}
            className={`px-5 py-3 rounded-full font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg
              ${
                isActive
                  ? 'bg-yellow-400 text-yellow-900 ring-4 ring-yellow-300'
                  : 'bg-pink-500 hover:bg-pink-400'
              }
            `}
          >
            {roomEmojis[room]} {room}
          </button>
        );
      })}
    </div>
  );
}
