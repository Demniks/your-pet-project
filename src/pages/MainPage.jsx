// import colors from 'settings/variables';

import MainContainer from 'components/mainContainer/MainContainer.styled';

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     paddingTop: '40px',
//     alignItems: 'start',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//     color: `${colors.text}`,
//   },
// };

export default function MainPage() {
  return (
    <>
      <MainContainer>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
            border: 2,
          }}
        >
          MainPage
        </div>
      </MainContainer>
    </>
  );
}
