import 'styles/globals.css';
import ResumePageTabsStateProvider from "context/resumeSectionStore.js"

function MyApp({ Component, pageProps }) {
  return (
    <ResumePageTabsStateProvider>
      <Component {...pageProps} />
    </ResumePageTabsStateProvider>
  )
}

export default MyApp
