import styled from 'styled-components';

export const StyledEvent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .page-container {
        display: grid;
        justify-content: center;
        grid-template: 150px auto / auto auto;
        grid-column-gap: 100px;
        .img-container{
            grid-column: 2 / 3;
            grid-row: 1 / 3;
            .event-img {
                width: 500px;
                height: 500px;
            }
        }
        .title-container {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            #title {
                font-family: 'Helvetica';
                font-weight: 700;
                font-size: 48px;
                margin: 0;
            }
            p {
                font-family: 'Helvetica';
                font-weight: 400;
                font-size: 18px;
                color: #828282;
                margin: 0;
            }
        }
        .info-container {
            display: flex;
            flex-direction: column;
            width: 450px;
            .info-section {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                .icons {
                    width: 56px;
                    height: 56px;
                    margin-right: 15px;
                }
                .text-cont {
                    width: 350px;
                    .text-title {
                        font-weight: 700;
                        font-size: 16px;
                        font-family: Helvetica;
                        margin: 0;
                    }
                    .text {
                        font-family: 'Helvetica';
                        font-weight: 400;
                        font-size: 16px;
                        margin: 0;
                    }
                }
            }
            button {
                border: none;
                outline: none;
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
                display: flex;
                align-items: center;
                justify-content: center;
                &:hover {
                    box-shadow: 0px 2px 5px 0px #000000;
                }
                .reverse-arrow {
                    margin-right: 10px;
                    transform: rotate(180deg);
                }
            }
        }
    }



    @media(max-width:420px) {

    }
`