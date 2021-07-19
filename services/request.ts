export function get(_wheelstore: string): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(2)
    }, 100)
  })
}
