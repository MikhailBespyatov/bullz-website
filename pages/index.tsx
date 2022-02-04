import influencersImage from 'assets/images/influencers.webp';
import webRecorderImage from 'assets/images/web-recorder.webp';
import whatIsBullzImage from 'assets/images/what-is-bullz.webp';
import { ChooseBlock } from 'components/ChooseBlock';
import { MainLayout } from 'components/common/layouts/MainLayout';
import { Container } from 'components/common/wrappers/Container';
import { ContentBlock } from 'components/ContentBlock';
import { Ticker } from 'components/Ticker';
import { UltimateBlock } from 'components/UltimateBlock';
import { termsAndConditionLink } from 'constants/externalLinks/constants';
import { forProjectsLink, webRecorderLink } from 'constants/routes';
import Head from 'next/head';
import { scrollTop } from 'utils';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BULLZ</title>
        <meta name="description" content="BULLZ website" />
      </Head>
      <MainLayout>
        <Container className="block">
          <UltimateBlock />
        </Container>

        <Ticker className="block">#farming #daos #wallets #nfts #blockchain #defi #crypto #altcoins</Ticker>

        <ChooseBlock className="block" />

        <Container className="block">
          <ContentBlock
            titleText="What is BULLZ?"
            paragraphText="Tap into the extensive BULLZ influencer network that covers all things crypto. Their recommendations for
              your project will be seen across all major social networks as well as in the BULLZ app. You can also use
              their BULLZ content on your own website."
            buttonText="Download now"
            src={whatIsBullzImage}
            alt="what is bullz"
            onButtonClick={scrollTop}
          />
        </Container>

        <Ticker className="block">Promote to earn Promote to earn </Ticker>

        <Container>
          <ContentBlock
            additionalText="Our Assets"
            titleText="BULLZ web recorder"
            paragraphText="Tap into the extensive BULLZ influencer network that covers all things crypto. Their recommendations for
              your project will be seen across all major social networks as well as in the BULLZ app. You can also use
              their BULLZ content on your own website."
            buttonText="Get Started Now"
            src={webRecorderImage}
            alt="web recorder"
            href={webRecorderLink}
            className="block"
          />

          <ContentBlock
            additionalText="Boost you reach"
            titleText="BULLZ Influencers"
            paragraphText="Tap into the extensive BULLZ influencer network that covers all things crypto. Their recommendations for
            your project will be seen across all major social networks as well as in the BULLZ app. You can also use
            their BULLZ content on your own website."
            buttonText="Discover more"
            src={influencersImage}
            alt="influencers"
            reverse
            href={forProjectsLink}
            className="block"
          />

          <ContentBlock
            additionalText="The Blockchain"
            titleText="WOM Protocol"
            paragraphText="The WOM Protocol is the blockchain protocol that powers the authentication of BULLZ recommendations and the
            WOM Token reward mechanism. Creators and authenticators stake WOM Tokens for the ability to earn WOM for
            their videos and ratings."
            buttonText="Learn more about WOM"
            href={termsAndConditionLink}
            className="block"
          />
        </Container>
      </MainLayout>
    </div>
  );
}
