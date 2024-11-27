# CSS Interview Questions 

### Difference between tags and elements
  * **Tag**: The markup used to define the start and end of an element. Tags are building blocks of elements   
    * `<p>` (opening tag), `</p>` (closing tag)  
  * **Elements**: A complete structure that includes a start tag, content, and an end tag. Elements are the actual components that create the document structure and content.   
    * `<p>Hello, world!</p>` (the entire paragraph element)  
        
### Difference between Pseudo-elements and Pseudo-classes
  * **Pseudo-elements** are used to style specific parts of an element, such as the first letter, the first line, or inserting content before or after the element's content.  
    * **Syntax**: Pseudo-elements use a double colon (`::`) before the name.  
  * **Pseudo-classes** are used to define the state or behaviour of an element, such as when it is hovered over, visited, or the first child of its parent.  
    * **Syntax**: Pseudo-classes use a single colon (`:`) before the name.  
        
### Difference between Semantic and Non-semantic HTML
  * **Semantic elements** convey meaning to both the browser and the developer. They describe the content they contain in a meaningful way.  
    * **Example** : `<header>`, `<footer>`, `<article>`, `<section>`.  
  * **Non-semantic elements** do not describe their content in a meaningful way, and they serve as generic containers.  
    * **Example**: `<div>` and `<span>`

### Why You Should Avoid Using a \<div\> inside of a \<span\> 
  * Inline vs. Block-Level Elements  
  * Invalid HTML Structure

### Position property in CSS

| Position Type | Removed from Doc Flow | Affected by top, right, left and bottom | Reference Point |
| :---- | ----- | ----- | ----- |
| Static | No | No  | Normal Flow |
| Relative | No | Yes | Normal Flow |
| Absolute  | Yes | Yes | Nearest positioned ancestor |
| Fixed  | Yes | Yes | Viewport |
| Sticky | No | Yes | Scroll position  |

### Difference between flex and grid  
  * **Flexbox**  
    * **One-Dimensional Layout**: Flexbox is designed for one-dimensional layouts, meaning it can manage either rows or columns, but not both at the same time.  
    * **Flex Container**: A container defined with `display: flex` allows its direct children (flex items) to be aligned and distributed along the main axis (horizontal or vertical).  
    * **Alignment**: Flexbox provides powerful alignment options with properties like `justify-content`, `align-items`, and `align-self`, allowing for easy control over spacing and alignment of items within the flex container.  
    * **Flexibility**: Items can grow or shrink based on available space, using properties like `flex-grow`, `flex-shrink`, and `flex-basis`.  
    * **Order Control**: The order of flex items can be changed using the `order` property without altering the HTML structure.  
  * **CSS Grid**  
    * **Two-Dimensional Layout**: CSS Grid is intended for two-dimensional layouts, allowing you to control both rows and columns simultaneously.  
    * **Grid Container**: A container defined with `display: grid` can create complex layouts by defining rows and columns, using properties like `grid-template-rows` and `grid-template-columns`.  
    * **Area Management**: CSS Grid allows for the creation of specific areas within the layout, using the `grid-area` property to place items in designated grid spaces.  
    * **More Control**: With Grid, you have finer control over item placement, size, and spacing, including gaps between rows and columns with the `gap` property.  
    * **Responsive Design**: Grid can handle responsive design more easily through features like `fr` units (fractional units) and media queries to adjust layouts based on screen size.  
  * **Use Cases**  
    * **Use Flexbox** for simpler, linear layouts like navigation bars, horizontal galleries, or aligning items in a single direction.  
    * **Use CSS Grid** for more complex, multi-dimensional layouts like entire web pages, card layouts, or any scenario where you need precise control over both rows and columns.


### CSS Comnbinators  
  * CSS combinators allow you to select elements based on the relationship between them. Here are the main types of combinators in CSS:
    * Descendant Combinator ( ): Selects elements that are descendants of a specified element.
    * Child Combinator (>): Selects elements that are direct children of a specified element.
    * Adjacent Sibling Combinator (+): Selects an element that is immediately following (sibling to) a specified element.
    * General Sibling Combinator (~): Selects all sibling elements after a specified element.

<iframe style={{width: '100%' , height: '400px'}} scrolling="no" title="Sorting based on key" src="https://codepen.io/sahihai12/embed/wvVEPPx?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/sahihai12/pen/wvVEPPx">
  Sorting based on key</a> by Sahil Kumar (<a href="https://codepen.io/sahihai12">@sahihai12</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


### Mobile and desktop first approach in css
  * Mobile-First Approach
    * Write CSS for mobile devices first.
    * Use media queries to add styles for larger screens.


    ```css
      /* Base styles for mobile devices */
      body {
          font-size: 16px;
          padding: 10px;
      }

      /* Styles for tablets and larger screens */
      @media (min-width: 768px) {
          body {
              font-size: 18px;
              padding: 20px;
          }
      }

      /* Styles for desktops and larger screens */
      @media (min-width: 1200px) {
          body {
              font-size: 20px;
              padding: 30px;
          }
      }
    ```
  * Desktop -First Approach
    * Write CSS for desktop devices first.
    * Use media queries to add styles for larger screens.
        

    ```css
      /* Base styles for desktop devices */
      body {
          font-size: 20px;
          padding: 10px;
      }

      /* Styles for tablets and larger screens */
      @media (max-width: 1200px) {
          body {
              font-size: 18px;
              padding: 20px;
          }
      }

      /* Styles for desktops and larger screens */
      @media (max-width: 768px) {
          body {
              font-size: 16px;
              padding: 30px;
          }
      }
    ```