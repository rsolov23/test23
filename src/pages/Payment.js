// //import files
import React from "react";

import { Container, Button } from "@chakra-ui/react";

function Payment() {
  return (
    <>
      <Container id="Payment">
        <div className="flex-row">
          <h2 className="section-title primary-border">Payment</h2>
        </div>
        <div>
          <Button id="smart-button-container"></Button>
          <div style="text-align: center;">
            <div>
              <Button id="paypal-button-container"></Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Payment