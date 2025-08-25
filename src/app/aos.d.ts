declare module 'aos' {
  interface AosOptions {
    duration?: number;
    once?: boolean;
    [key: string]: any;
  }
  const AOS: {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  };
  export default AOS;
}