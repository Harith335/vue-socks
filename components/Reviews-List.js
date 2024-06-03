app.component("Reviews-List", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `
      <div class="review-container">
      <h3>Reviews:</h3>
        <ul>
          <li v-for="(review,index) in reviews" :id="index">
            {{review.name}} gave this {{review.rating}} stars
            <br/>
            {{review.review}}
            <br />
            Recommended:{{review.question}}
          </li>
        </ul>
      </div>
    `,
});
