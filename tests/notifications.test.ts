import fetch from "node-fetch";
import { notifyUser } from "../src/utils/notifications";

jest.mock("node-fetch", () => jest.fn());

describe('notifyUser', () => {


    it("calls fetch with correct URL, method and playload", async () => {
        const message = "Hello world";
        const fetchSpy = jest.mocked(fetch);
        fetchSpy.mockResolvedValue({ok: true} as any);

        await notifyUser(message);+

        expect(fetchSpy).toHaveBeenCalledWith("https://example.com/api/notify", expect.objectContaining({"body": expect.stringContaining(message), "method": "POST"}));
    })
});
