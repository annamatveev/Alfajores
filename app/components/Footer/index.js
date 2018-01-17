import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex; 
  justify-content: space-between;
  padding: 20px 50px 30px 50px;
  margin-top: 20px;
  border-top: 1px solid gray;
`;

const Footer = () => (
  <Wrapper>
    <section>
      <FormattedMessage {...messages.licenseMessage} />
    </section>
    <section>
      <FormattedMessage
        {...messages.authorMessage}
        values={{
          author: <a href="https://twitter.com/annamatveev">Anna Matveev</a>,
        }}
      />
    </section>
  </Wrapper>
);

export default Footer;
