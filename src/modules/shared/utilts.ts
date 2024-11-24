
export function hashGenerator(): string {
  return (Math.random() + 1).toString(36).substring(2);
}

export async function hashGeneratorAsync(): Promise<string> {
  return (Math.random() + 1).toString(36).substring(2);
}
