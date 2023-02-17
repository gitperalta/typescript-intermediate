class Singleton {
  private static instance: Singleton;
  private constructor() {}
  public static getInstance(): Singleton {
    if (!Singleton.instance) Singleton.instance = new Singleton(); // It creates the single public instance
    return Singleton.instance;
  }

  public showByConsole() {
    console.log("Singleton Method");
  }
}
