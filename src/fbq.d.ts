export {};

declare global {
  interface Window {
    // Meta Pixel。index.html で初期化済み。未ロード時は undefined になり得る。
    fbq?: (...args: unknown[]) => void;
  }
}
