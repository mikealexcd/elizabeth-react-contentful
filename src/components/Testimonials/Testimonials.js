import { useState, useEffect } from "react";
import client from "../../client";
import styles from "./Testimonials.module.scss";
import { Transition, SwitchTransition } from "react-transition-group";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(0);

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  function addTestimonials(_oldArray, newTestimonial) {
    setTestimonials((_oldArray) => [newTestimonial, ..._oldArray]);
    setLoading(false);
  }

  useEffect(
    () =>
      client
        .getEntries({
          content_type: "testimonials",
        })
        .then((entries) =>
          entries.items.map((entry) =>
            addTestimonials(testimonials, entry.fields)
          )
        )
        .catch((error) => console.log(error)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const testimonialEntries =
    !loading && testimonials ? (
      <SwitchTransition mode="out-in">
        <Transition timeout={duration} key={order}>
          {(state) => (
            <div
                style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              className={styles.testimonials_entry}
            >
              <p className={styles.testimonials_quote}>
                {testimonials[order].quote}
              </p>
              <div className={styles.testimonials_content}>
                <img
                  className={styles.testimonials_image}
                  src={testimonials[order].image.fields.file.url}
                  alt={testimonials[order].person}
                />
                <div className={styles.testimonials_details}>
                  <p className={styles.testimonials_person}>
                    {testimonials[order].person}
                  </p>
                  <p className={styles.testimonials_role}>
                    {testimonials[order].role}
                  </p>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </SwitchTransition>
    ) : (
      <div>Loading</div>
    );

  function handleClick() {
    console.log(testimonials, testimonials.length, order);
    if (order < testimonials.length - 1) {
      setOrder(order + 1);
    } else {
      setOrder(0);
    }
  }

  return (
    <section className={styles.testimonials_container}>
      <div className={styles.testimonials_carousel}>
        <button className={styles.testimonials_arrow} onClick={handleClick}>
          ◀
        </button>
        <div
          className={styles.testimonials_wrapper}
        >
          <h2 className={styles.testimonials_title}>Testimonials</h2>
          {testimonialEntries}
        </div>
        <button className={styles.testimonials_arrow} onClick={handleClick}>
          ▶
        </button>
      </div>
    </section>
  );
}

export default Testimonials;

// The following approach loads all testimonials into the DOM at the same time, in case the carousel is done through CSS or something.
// const testimonialEntries = testimonials.map((testimonial) =>
// <div className={styles.testimonials_entry} key={testimonial.person}>
//     <p className={styles.testimonials_quote}>
//         {testimonial.quote}
//     </p>
//     <div className={styles.testimonials_content}>
//         <img className={styles.testimonials_image} src={testimonial.image.fields.file.url} alt={testimonial.person} />
//         <div className={styles.testimonials_details}>
//             <p className={styles.testimonials_person}>{testimonial.person}</p>
//             <p className={styles.testimonials_role}>{testimonial.role}</p>
//         </div>
//     </div>
// </div>
// )
