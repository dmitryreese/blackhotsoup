import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 560px;
  padding: 60px 0px;
  background: linear-gradient(to right, #646cff 33%, white 33% 100%);
  border-radius: 10px;
  box-shadow: 0px 5px 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;

  @media (max-width: 540px) {
    background: white;
  }
`

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 540px) {
    display: none;
  }
`

export const RightWrapper = styled.div`
  flex: 2;
`

export const InputWrapper = styled.div`
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
`

export const CreateAccountWrapper = styled.div`
  align-self: center;
  margin-top: 20px;
`

export const TitleWrapper = styled.div`
  margin-bottom: 40px;
`

export const Title = styled.p`
  font-size: 32px;
  font-weight: 500;
  margin: 0px;
`

export const WrongCredentialsWrapper = styled.div`
  position: relative;
`

export const StyledWrongCredentials = styled.p`
  position: absolute;
  color: red;
  margin: 0px;
`

export const Logo = styled.img`
  height: 30%;
  filter: contrast(2);
`

export const MobileLogo = styled.img`
  position: absolute;
  right: 10px;
  margin-top: -50px;
  height: 5%;

  @media (min-width: 540px) {
    display: none;
  }
`
