<template>
  <div class="container-fluid mt-5a">
    <div class="configurations">
      <ul id="configurations">
        <li>
          <b>Type</b>: {{ type }}
        </li>
        <li>
          <b>Description</b>: {{ description }}
        </li>
        <li>
          <b>Minimum Amount</b>: {{ minimumAmount.amount }} | {{ minimumAmount.currency }}
        </li>
        <li>
          <b>Maximum Amount</b>: {{ maximumAmount.amount }} | {{ maximumAmount.currency }}
        </li>
        <li>
          <b>Number Of Payments</b>: {{ numberOfPayments }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      type: 'PAY_BY_INSTALLMENT',
      description: 'Pay over time',
      minimumAmount: {
        amount: '5.00',
        currency: 'EUR'
      },
      maximumAmount: {
        amount: '300.00',
        currency: 'EUR'
      },
      numberOfPayments: '3'
    }
  }
}
</script>
