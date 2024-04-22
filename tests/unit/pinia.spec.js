import { setActivePinia, createPinia } from "pinia";
import useUserStore from "@/stores/user";
import { auth } from "../../src/includes/firebase";

jest.mock("../../src/includes/firebase", () => ({
  auth: {
    signInWithEmailAndPassword: jest.fn(),
  },
}));

describe("stores", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("authenticates user", async () => {
    const store = useUserStore();

    auth.signInWithEmailAndPassword.mockResolvedValue();

    expect(store.userLoggedIn).toBe(false);
    await store.authenticate({});
    expect(store.userLoggedIn).toBe(true);
  });
});
