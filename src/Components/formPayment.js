import React from 'react'

function formPayment() {

    return(
        <form action="/processar_pagamento" method="post" id="pay" name="pay" >
            <fieldset>
                <ul>
                    <li>
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" value="alessandra@gmail.com"  placeholder="your email"/>
                    </li>
                    <li>
                        <label for="cardNumber">Credit card number:</label>
                        <input type="text" id="cardNumber" data-checkout="cardNumber" placeholder="4509 9535 6623 3704" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
                    </li>
                    <li>
                        <label for="securityCode">Security code:</label>
                        <input type="text" id="securityCode" data-checkout="securityCode" placeholder="123" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
                    </li>
                    <li>
                        <label for="cardExpirationMonth">Expiration month:</label>
                        <input type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" placeholder="11" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
                    </li>
                    <li>
                        <label for="cardExpirationYear">Expiration year:</label>
                        <input type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" placeholder="2025" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
                    </li>
                    <li>
                        <label for="cardholderName">Card holder name:</label>
                        <input type="text" id="cardholderName" data-checkout="cardholderName" placeholder="APRO" />
                    </li>
                    <li>
                        <label for="docType">Document type:</label>
                        <select id="docType" data-checkout="docType"></select>
                    </li>
                    <li>
                        <label for="docNumber">Document number:</label>
                        <input type="text" id="docNumber" data-checkout="docNumber" placeholder="19119119100" />
                    </li>
                    <li>
                    <label for="installments">Installments:</label>
                    <select id="installments" class="form-control" name="installments"></select>
                </li>
                </ul>
                <input type="hidden" name="amount" id="amount"/>
                <input type="hidden" name="description"/>
                <input type="hidden" name="paymentMethodId" />
                <input type="submit" value="Pay!" />
            </fieldset>
        </form>
    )
}

export default formPayment;