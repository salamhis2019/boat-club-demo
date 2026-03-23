"use client";

const boats = [
  {
    name: "Ocean Breeze",
    type: "Sailboat",
    length: "32 ft",
  },
  {
    name: "Blue Horizon",
    type: "Catamaran",
    length: "40 ft",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      {/* Install Banner */}
      <div className="bg-[#1e3a5f] px-4 py-3 text-center text-sm text-white">
        Install this app: Tap <strong>Share</strong> →{" "}
        <strong>Add to Home Screen</strong>
      </div>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        {/* Hero */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Boat Club App
          </h1>
          <p className="mt-2 text-lg text-gray-500">Mobile App Demo</p>
        </div>

        {/* Primary Button */}
        <button className="mb-12 w-full max-w-xs rounded-2xl bg-[#1e3a5f] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform active:scale-95">
          View Demo
        </button>

        {/* Boat Cards */}
        <div className="flex w-full max-w-sm flex-col gap-4">
          {boats.map((boat) => (
            <div
              key={boat.name}
              className="rounded-2xl bg-white p-5 shadow-md"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {boat.name}
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                {boat.type} · {boat.length}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
