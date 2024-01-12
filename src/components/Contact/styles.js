import styled from "styled-components";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

export var Container = styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 10rem;\n\n  header{\n    text-align: center;\n    h2{\n      text-align: center;\n      font-size: 4rem;\n    }\n    p{\n      color: var(--blue);\n      font-weight: 500;\n    }\n  }\n\n  .contacts{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n    place-items: center;\n    margin-top: 1.5rem;\n    div{\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 50%;\n      max-width: 30rem;\n      gap: 2rem;\n      background-color: var(--blue);\n      border-radius: 1.4rem;\n      padding: 1.6rem 2.8rem;\n      transition: background-color 0.25s;\n      img{\n        width: 4rem;\n      }\n      a{\n        color: var(--black);\n        font-weight: 500;\n      }\n      &:hover{\n        background-color: var(--green);\n        a{\n          color: #FFF;\n        }\n      }\n    }\n  }\n\n\n  @media(max-width: 960px){\n    .contacts{\n      flex-direction: column;\n      div{\n        width: 100%;\n        \n      }\n    }\n  }\n  \n"], ["\n  margin-top: 10rem;\n\n  header{\n    text-align: center;\n    h2{\n      text-align: center;\n      font-size: 4rem;\n    }\n    p{\n      color: var(--blue);\n      font-weight: 500;\n    }\n  }\n\n  .contacts{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n    place-items: center;\n    margin-top: 1.5rem;\n    div{\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 50%;\n      max-width: 30rem;\n      gap: 2rem;\n      background-color: var(--blue);\n      border-radius: 1.4rem;\n      padding: 1.6rem 2.8rem;\n      transition: background-color 0.25s;\n      img{\n        width: 4rem;\n      }\n      a{\n        color: var(--black);\n        font-weight: 500;\n      }\n      &:hover{\n        background-color: var(--green);\n        a{\n          color: #FFF;\n        }\n      }\n    }\n  }\n\n\n  @media(max-width: 960px){\n    .contacts{\n      flex-direction: column;\n      div{\n        width: 100%;\n        \n      }\n    }\n  }\n  \n"
    /* old one - 2/1/2023 -
    @media(max-width: 960px){
        .contacts{
          flex-direction: column;
          div{
            width: 100%;
            flex-direction: column;
          }
        }
    
    */
])));
var templateObject_1;
/* old one - 2/1/2023 -
@media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }

*/
