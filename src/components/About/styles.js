import styled from "styled-components";

export var Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .section-anchor{
    scroll-margin-top: 8rem;
    padding-top: 2rem;
  }

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .hard-skills.single-line{
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 1.4rem;
  }

  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--blue);
  }

  h3{
    margin-top: 2rem;
    color: var(--blue);
  }

  h4{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: var(--blue);
    font-size: 1.6rem;

    .date{
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--green);
      margin-left: 0.8rem;
    }
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .role{
    font-size: 1.4rem;
    font-style: italic;
    color: var(--green);
    margin-bottom: 0.8rem;
    font-weight: 400;
  }

  .timeline{
    margin-top: 1.5rem;
    position: relative;
    padding-left: 2.5rem;

    &::before{
      content: '';
      position: absolute;
      left: 0.8rem;
      top: 0;
      bottom: 0;
      width: 2px;
      background: var(--blue);
    }
  }

  .timeline-item{
    position: relative;
    margin-bottom: 2.5rem;
    padding-left: 1.5rem;
  }

  .timeline-dot{
    position: absolute;
    left: -2.1rem;
    top: 0.8rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--blue);
    border: 2px solid var(--green);
    z-index: 1;
  }

  .timeline-content{
    ul{
      list-style: disc;
      padding-left: 2rem;
      margin-top: 0.8rem;

      li{
        font-size: 1.4rem;
        letter-spacing: 0.05rem;
        margin-bottom: 0.6rem;
        line-height: 1.6;
      }
    }
  }

  .tech-stack-inline{
    margin-top: 1rem;
    font-size: 1.5rem !important;
    font-weight: 400 !important;
    line-height: 1.8;
    color: var(--green);
  }

  .certificates-list{
    margin-top: 1rem;

    ul{
      list-style: disc;
      padding-left: 2rem;

      li{
        font-size: 1.4rem;
        margin-bottom: 0.8rem;
        letter-spacing: 0.05rem;
        line-height: 1.6;

        a{
          color: var(--blue);
          text-decoration: underline;
          transition: color 0.3s;

          &:hover{
            color: var(--green);
          }
        }
      }
    }
  }

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 75%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
      }
    }

    .hard-skills.single-line{
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }

    .hard-skills.single-line{
      flex-wrap: wrap;
    }

    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
      }
    }

    .timeline{
      text-align: left;
    }

    .tech-stack-inline{
      text-align: center;
    }

    .certificates-list{
      text-align: left;
    }
  }
`;