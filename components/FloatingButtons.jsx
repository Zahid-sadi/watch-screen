"use client";

export default function FloatingButtons({ setClockStyle }) {
  const styles = ["Minimal", "Classic", "Antique", "Modern", "Sport"];

  return (
    <div>
      {styles.map((style, idx) => (
        <button
          key={style}
          onClick={() => setClockStyle(style)}
          className={`absolute px-3 py-2 bg-white bg-opacity-30 hover:bg-opacity-70 text-black rounded-full transition-all`}
          style={{
            top: `${10 + idx * 12}%`,
            left: `${5 + idx * 15}%`,
            transform: `rotate(${idx * 12}deg)`,
          }}
        >
          {style[0]}
        </button>
      ))}
    </div>
  );
}
