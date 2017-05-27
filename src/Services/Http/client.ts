
interface HTTPClientInterface {
  get<T>(url : string, config : {}): Promise<T>
}

export default HTTPClientInterface;
