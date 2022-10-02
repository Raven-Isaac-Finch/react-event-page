import styled from 'styled-components';

export const StyledHome = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F6F2FF;
    .container {
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template: 300px 300px / 30% 30%;
        grid-column-gap: 100px;
        .top-container {
            text-align: right;
            grid-column: 2 / 3;
            grid-row: 1 / 2;
            h1 {
                font-size: 36px;
                font-weight: 800;
                font-family: Helvetica;
                span {
                    line-height: 42px;
                    background: linear-gradient(to right, #8456EC, #E87BF8);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
            .home-text {
                font-family: 'Helvetica';
                font-weight: 300;
                font-size: 16px;
                line-height: 18px;
                color: #4F4F4F;
            }
        }
        .event-container {
            grid-column: 1 / 2;
            grid-row: 1 / 3;
            img {
                width: 100%;
                height: 100%;
                cursor: pointer;
                border-radius: 25px;
                transition: 0.2s ease-in-out;
                &:hover {
                    transform: scale(1.05);
                    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.6);
                }
            }
        }
        .btn-container {
            grid-column: 2 / 3;
            grid-row: 2 / 3;
            align-self: flex-start;
            justify-self: flex-end;
            .create-btn {
                background: linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%);
                border-radius: 10px;
                width: 187px;
                height: 50px;
                padding: 16px 30px;
                font-weight: 700;
                font-family: 'Helvetica';
                color: white;
                text-decoration: none;
                transition: 0.2s ease-in-out;
                box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.6);
                &:hover {
                    box-shadow: 0px 2px 5px 0px #000000;
                }
            }
        }
    }
    @media(max-width:1024px){
        flex-direction: column;
        justify-content: space-around;
        .container {
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .top-container {
                width: 90%;
                text-align: center;
                h1 {
                    width: 70%;
                    margin: auto;
                }
            }
            .event-container {
                width: 180px;
            }
            .btn-container {
                width: fit-content;
                margin-top: 16px;
                align-self: center;
                justify-self: center;
            }
        }
    }
    @media(max-width:420px) {
        flex-direction: column;
        justify-content: space-around;
        .container {
            height: 75vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .top-container {
                width: 90%;
                text-align: center;
                h1 {
                    width: 70%;
                    margin: auto;
                }
            }
            .event-container {
                width: 60%;
            }
            .btn-container {
                margin-top: 16px;
            }
        }
    }
`