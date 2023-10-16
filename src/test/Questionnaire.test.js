import {mount} from "@vue/test-utils";
import { Questionnaire } from '../components/Questionnaire.vue'
// import { expect, test } from "vitest";
const wrapper = mount(Questionnaire);

it("Test checkEnableWhenConditions", async () => {

  expect(typeof Questionnaire.checkEnableWhenConditions).toBe("function");
});