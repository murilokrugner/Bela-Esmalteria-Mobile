import styled from 'styled-components/native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Image = styled(Button)`
  position: absolute;
  margin-top: 170px;
  margin-left: 155px;
  background: transparent;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 25px;
  align-self: center;
  margin: 50px;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;

export const Form = styled.ScrollView.attrs({
  showVerticalIndicator: false,
  contentContainerStyle: {padding: 30},
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: #f64c75;
`;
