export default function Home() {
  return (
    <>
      <style>{`
        @keyframes bg-move1 {
          0% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(-30px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.7; }
        }
        @keyframes bg-move2 {
          0% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(40px); opacity: 0.7; }
          100% { transform: translateY(0); opacity: 0.5; }
        }
        @keyframes vignette {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }
      `}</style>
      <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
        {/* Animated deep gradients for 3D depth */}
        {/* Multiple animated gradient lines for depth */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(120deg, #232323 0%, #111112 60%, #000 100%)",
            opacity: 0.8,
            animation: "bg-move1 22s cubic-bezier(0.77,0,0.18,1) infinite alternate"
          }}
        />
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(200deg, #181818 0%, #000 80%)",
            opacity: 0.5,
            animation: "bg-move2 28s cubic-bezier(0.77,0,0.18,1) infinite alternate"
          }}
        />
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(60deg, #222 0%, #000 90%)",
            opacity: 0.4,
            animation: "bg-move1 30s cubic-bezier(0.77,0,0.18,1) 2s infinite alternate"
          }}
        />
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(160deg, #191919 0%, #000 100%)",
            opacity: 0.3,
            animation: "bg-move2 36s cubic-bezier(0.77,0,0.18,1) 4s infinite alternate"
          }}
        />
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(250deg, #232323 0%, #000 100%)",
            opacity: 0.25,
            animation: "bg-move1 40s cubic-bezier(0.77,0,0.18,1) 6s infinite alternate"
          }}
        />
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 70%, #000 100%)",
            opacity: 0.7,
            animation: "vignette 12s ease-in-out infinite alternate"
          }}
        />
        <div className="relative z-20 flex flex-col items-center gap-8 select-none">
          <div
            className="text-white text-xl font-bold"
            style={{
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              letterSpacing: '0.04em',
              textShadow: '0 2px 8px #000, 0 0px 1px #fff2',
            }}
          >
            What is your intention?
          </div>
          <input
            type="text"
            placeholder="Type your intention..."
            className="w-[340px] max-w-full px-5 py-3 text-lg bg-black/60 text-white border-2 border-white rounded-xl outline-none focus:border-white focus:ring-2 focus:ring-white/80 shadow-lg transition-all duration-200"
            style={{
              boxShadow: '0 0 12px 2px #fff8, 0 2px 24px #000a',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            }}
            autoFocus
          />
        </div>
      </div>
    </>
  );
}
