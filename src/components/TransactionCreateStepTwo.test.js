import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on initial render, the pay button is disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
  // get a button with the text "Pay"
  const payButton = await screen.findByRole("button", { name: "Pay" });
  // expect button to be enabled
  expect(payButton).toBeDisabled();
});

test("When we set the amount and notes fields, the pay button is enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
  // get the input with a regex that matches the text "Amount"
  const amountInput = await screen.getByPlaceholderText(/amount/i);
  userEvent.type(amountInput, "100");

  const notesInput = await screen.getByPlaceholderText(/note/i);
  userEvent.type(notesInput, "test");

  const payButton = await screen.findByRole("button", { name: "Pay" });
  expect(payButton).toBeEnabled();
});
