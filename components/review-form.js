app.component("review-form", {
  template:
    /*html*/
    `<form class="review-form" @Submit.prevent='onSubmit'>
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model='name'>
  
      <label for="review">Review:</label>      
      <textarea id="review" v-model='review'></textarea>
  
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number='rating'>
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <label for="question">Whould you recommended this product?</label>      
      <select id="review" v-model='question'>
        <option>Yes</option>
        <option>No</option>
      </select>

      <input class="button" type="submit" value="Submit"> 
    </form>`,
  data() {
    return {
      name: "",
      review: "",
      rating: null,
      question: null,
    };
  },
  methods: {
    onSubmit() {
      if (this.name === "" || this.review === "" || this.rating === null) {
        alert("Review is incomplete. Please fill out every field.");
      }
      let productPreview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        question: this.question,
      };

      this.$emit("review-submited", productPreview);

      this.name = "";
      this.review = "";
      this.rating = "";
      this.question = "";
    },
  },
});
