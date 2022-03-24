import type { Link } from "~~/@types";

export function useClicksCounter() {
  return (link: Link) => {
    let notTracked = link.clicks;

    let result = "";

    const addToResult = (key: string, value: number) =>
      (result += `${key}: ${value} clicks.\n`);

    if (link.sources) {
      for (const [key, value] of Object.entries(link.sources)) {
        addToResult(key, value);
        notTracked -= value;
      }
    }

    addToResult("Not Tracked", notTracked);
    return result;
  };
}