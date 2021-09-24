import React from "react";
import { create } from "react-test-renderer";
import Status from "./Status";

describe("Status component test", () => {
    test("status from the props should be displayed", () => {
        const component = create(<Status status='test123' />);
        const instance = component.getInstance();
        expect(instance.status).toBe("test123");
    });
});
