import { useState } from "react";
import "./App.css";
import { useGenerateShortUrl } from "./data/mutations/url.mutation";
import { toast } from "react-toastify";

function App() {
  const useGenerateShortUrlMutation = useGenerateShortUrl();
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const [genratedLink, setGenratedLink] = useState<string>(
    "https://short.url/abc123"
  );
  const [copied, setCopied] = useState(false);

  const handleGenerateShortUrl = () => {
    useGenerateShortUrlMutation.mutate(currentUrl, {
      onSuccess: (data) => {
        toast.success("Short URL generated successfully", {
          position: "top-center",
          autoClose: 1000,
        });
        setGenratedLink(data.shortUrl);
        setCopied(false);
      },
      onError: (err: any) => {
        console.log();
        toast.error(err.response.data.message || "Something went wrong", {
          position: "top-center",
          autoClose: 1000,
        });
      },
    });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(genratedLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
                  Arc Shortener
                </h1>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enter your long URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://example.com/xxxxxxx"
                      onChange={(e) => setCurrentUrl(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    onClick={handleGenerateShortUrl}
                    className="w-full py-3 px-6 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition hover:-translate-y-0.5"
                  >
                    {useGenerateShortUrlMutation.isPending
                      ? "Shortening..."
                      : "Shorten URL"}
                  </button>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h2 className="text-sm font-medium text-gray-700 mb-2">
                    Your shortened URL
                  </h2>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      readOnly
                      value={genratedLink}
                      className="flex-1 px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none"
                    />
                    <button
                      onClick={handleCopy}
                      className={`px-4 py-2 text-sm text-white bg-gradient-to-r ${
                        copied
                          ? "from-green-500 to-green-600"
                          : "from-blue-500 to-indigo-500 hover:from-blue-600"
                      } rounded-lg transition-colors duration-200`}
                    >
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
