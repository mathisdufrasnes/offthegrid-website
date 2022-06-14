import React, {Fragment, useEffect} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Box, CircularProgress, Divider, Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root:
        {
            flexGrow: 1
        },
    box1: {
        padding: '75px',
    },
    box2: {
        paddingLeft: '15%',
        paddingRight: '15%',
        paddingTop: '5%',
        height: '100vh',
    },
    bGap: {
        marginBottom: '80px'
    },
    mGap: {
        marginBottom: '40px'
    },
    sGap: {
        marginBottom: '20px'
    },
    finalGap:{
        marginBottom: '100px'
    }

}));

export default function PrivacyPolicy() {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.box1}>
                <div className={classes.box2}>
                    <Typography variant={'h2'} className={classes.mGap}>PRIVACY NOTICE</Typography>
                    <Typography variant={'h5'} className={classes.bGap}>Last updated June 14, 2022</Typography>
                    <Typography variant={'body1'} className={classes.sGap}>This privacy notice for Equipement Off The
                        Grid inc. (doing business as Off The Grid) ("<b>Off The Grid</b>," "<b>we</b>," "<b>us</b>," or
                        "<b>our</b>"), describes how and why we might collect, store, use, and/or share ("<b>process</b>")
                        your information when you use our services ("<b>Services</b>"), such as when you :
                    </Typography>
                    <ul>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>Visit our website at <a
                                href={'https://www.getoffthegrid.ca'}>https://www.getoffthegrid.ca</a>, our web
                                application at <a href={'app.getoffthegrid.ca'}>app.getoffthegrid.ca</a> or any website
                                of ours that links to this privacy notice.
                            </Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>Download and use our mobile application (Off The Grid), or any
                                other
                                application of ours that links to this privacy notice
                            </Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>Engage with us in other related ways, including any sales,
                                marketing,
                                or events
                            </Typography>
                        </li>
                    </ul>
                    <Typography variant={'body1'} className={classes.bGap}> <b>Questions or concerns?</b> Reading this
                        privacy notice will help you understand your privacy rights and choices. If you do not agree
                        with our policies and practices, please do not use our Services. If you still have any questions
                        or concerns, please contact us at mathis@getoffthegrid.ca.
                    </Typography>

                    <Typography variant={'h4'} className={classes.mGap}>SUMMARY OF KEY POINTS</Typography>
                    <Typography variant={'body1'} className={classes.mGap}><b><em>
                        This summary provides key points from our privacy notice, but you can find out more details
                        about any of these topics by clicking the link following each key point or by using our table of
                        contents below to find the section you are looking for. You can also click <a href='#contents'>
                        here </a> to go directly to our table of contents.</em></b>
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}><b>
                        What personal information do we process? </b>When you visit, use, or navigate our Services, we
                        may process personal information depending on how you interact with Off The Grid and the
                        Services, the choices you make, and the products and features you use. Click <a href='#1'>
                            here </a> to learn more.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}><b>
                        Do we process any sensitive personal information? </b>We do not process sensitive personal
                        information.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}><b>
                        Do we receive any information from third parties? </b>We do not receive any information from
                        third parties.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}><b>
                        How do we process your information? </b>We process your information to provide, improve, and
                        administer our Services,communicate with you, for security and fraud prevention, and to comply
                        with law. We may also process your information for other purposes with your consent. We process
                        your information only when we have a valid legal reason to do so. Click <a href='#2'>
                            here </a> to learn more.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}><b>
                        In what situations and with which
                        parties do we share personal information? </b>We may share information in specific situations
                        and with specific third parties. Click <a href='#4'> here </a> to learn more.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}><b>
                        How do we keep your information safe? </b>We have organizational and technical processes and
                        procedures in place to protect your personal information. However, no electronic transmission
                        over the internet or information storage technology can be guaranteed to be 100% secure, so we
                        cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties
                        will not be able to defeat our security and improperly collect, access, steal, or modify your
                        information. Click <a href='#7'> here </a> to learn more.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}><b>
                        What are your rights? </b>Depending on where you are located geographically, the applicable
                        privacy law may mean you have certain rights regarding your personal information. Click
                        <a href='#8'> here </a> to learn more.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}><b>
                        How do you exercise your rights? </b>The easiest way to exercise your rights is by filling out
                        our data subject request form available
                        <a href={'https://app.termly.io/notify/6ad6cc93-887b-4c4c-bdca-90f00c067c74'}> here </a>, or by
                        contacting us. We will consider and act upon any request in accordance with applicable
                        data protection laws.
                    </Typography>
                    <Typography variant={'body1'} className={classes.bGap}>
                        Want to learn more about what Off The Grid does with any information we collect? Click <a
                        href='contents'> here </a> to review the notice in full.
                    </Typography>

                    <Typography variant={'h4'} className={classes.mGap} id={'contents'}>TABLE OF CONTENTS</Typography>
                    <Typography variant={'body1'}><a href='#1'>1. WHAT INFORMATION DO WE COLLECT? </a></Typography>
                    <Typography variant={'body1'}><a href='#2'>2. HOW DO WE PROCESS YOUR INFORMATION? </a></Typography>
                    <Typography variant={'body1'}><a href='#3'>3.
                        WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION? </a></Typography>
                    <Typography variant={'body1'}><a href='#4'>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
                        INFORMATION? </a></Typography>
                    <Typography variant={'body1'}><a href='#5'>5. DO WE USE COOKIES AND OTHER TRACKING
                        TECHNOLOGIES? </a></Typography>
                    <Typography variant={'body1'}><a href='#6'>6. HOW LONG DO WE KEEP YOUR INFORMATION?</a></Typography>
                    <Typography variant={'body1'}><a href='#7'>7. HOW DO WE KEEP YOUR INFORMATION
                        SAFE? </a></Typography>
                    <Typography variant={'body1'}><a href='#8'>8. WHAT ARE YOUR PRIVACY RIGHTS? </a></Typography>
                    <Typography variant={'body1'}><a href='#9'>9. CONTROLS FOR DO-NOT-TRACK FEATURES </a></Typography>
                    <Typography variant={'body1'}><a href='#10'>10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY
                        RIGHTS? </a></Typography>
                    <Typography variant={'body1'}><a href='#11'>11. DO WE MAKE UPDATES TO THIS NOTICE? </a></Typography>
                    <Typography variant={'body1'}><a href='#12'>12. HOW CAN YOU CONTACT US ABOUT THIS
                        NOTICE? </a></Typography>
                    <Typography className={classes.bGap} variant={'body1'}><a href='#13'>13. HOW CAN YOU REVIEW, UPDATE,
                        OR DELETE THE DATA WE COLLECT FROM YOU? </a></Typography>


                    <Typography id={'1'} variant={'h4'} className={classes.mGap}>1. WHAT INFORMATION DO WE
                        COLLECT?</Typography>
                    <Typography variant={'h6'} className={classes.mGap}>Personal information you disclose to
                        us</Typography>
                    <Typography variant={'body1'} className={classes.mGap}><em><b>
                        In Short: </b>We collect personal information that you provide to us.</em>
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        We collect personal information that you voluntarily provide to us when you
                        register on the Services,
                        express an interest in obtaining information about us or our products and Services, when you
                        participate in activities on the Services, or otherwise when you contact us.
                    </Typography>
                    <Typography variant={'body1'} className={classes.sGap}><b>
                        Personal Information Provided by You. </b>The personal information that we collect depends on
                        the context of your interactions with us and the Services, the choices you make, and the
                        products
                        and features you use. The personal information we collect may include the following:
                    </Typography>
                    <ul>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>Names</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>Phone numbers</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>Email addresses</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>Mailing addresses</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>Passwords</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>Debit/Credit card numbers</Typography>
                        </li>
                        <li className={classes.mGap}>
                            <Typography variant={'body1'}>Usernames</Typography>
                        </li>
                    </ul>
                    <Typography variant={'body1'} className={classes.mGap}><b>
                        Sensitive Information. </b>We do not process sensitive information.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}><b>
                        Payment Data. </b>We may collect data necessary to process your payment if you make purchases,
                        such as your payment instrument number (such as a credit card number), and the security code
                        associated with your payment instrument. All payment data is stored by Stripe. You may find
                        their privacy notice link(s) here : <a
                            href={'https://stripe.com/en-ca/privacy'}>https://stripe.com/en-ca/privacy</a>.
                    </Typography>
                    <Typography variant={'body1'} className={classes.sGap}><b>
                        Application Data. </b>If you use our application(s), we also may collect the following
                        information if you choose to provide us with access or permission:
                    </Typography>
                    <ul>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}><em>Mobile Device Access.</em> We may request access or
                                permission to certain features from your mobile device, including your mobile device's
                                bluetooth, camera, and other features. If you wish to change our access or permissions,
                                you may do so in your device's settings.</Typography>
                        </li>
                        <li className={classes.mGap}>
                            <Typography variant={'body1'}><em>Push Notifications.</em> We may request to send you push
                                notifications regarding your account or certain features of the application(s). If you
                                wish to opt out from receiving these types of communications, you may turn them off in
                                your device's settings.</Typography>
                        </li>
                    </ul>
                    <Typography variant={'body1'} className={classes.mGap}>This information is primarily needed to
                        maintain the security and operation of our application(s), for troubleshooting, and for our
                        internal analytics and reporting purposes.</Typography>
                    <Typography variant={'body1'} className={classes.mGap}>All personal information that you provide to
                        us must be true, complete, and accurate, and you must notify us of any changes to such personal
                        information.</Typography>

                    <Typography variant={'h6'} className={classes.mGap}>Information automatically collected</Typography>
                    <Typography variant={'body1'} className={classes.mGap}><em><b>
                        In Short: </b>Some information — such as your Internet Protocol (IP) address and/or browser and
                        device characteristics — is collected automatically when you visit our Services.</em>
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>We automatically collect certain information
                        when you visit, use, or navigate the Services. This information does not reveal your specific
                        identity (like your name or contact information) but may include device and usage information,
                        such as your IP address, browser and device characteristics, operating system, language
                        preferences, referring URLs, device name, country, location, information about how and when you
                        use our Services, and other technical information. This information is primarily needed to
                        maintain the security and operation of our Services, and for our internal analytics and
                        reporting purposes.</Typography>
                    <Typography variant={'body1'} className={classes.mGap}>Like many businesses, we also collect
                        information through cookies and similar technologies.</Typography>
                    <Typography variant={'body1'} className={classes.sGap}>The information we collect
                        includes:</Typography>
                    <ul>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}><em>Log and Usage Data.</em>
                                Log and usage data is service-related, diagnostic, usage, and performance information
                                our servers automatically collect when you access or use our Services and which we
                                record in log files. Depending on how you interact with us, this log data may include
                                your IP address, device information, browser type, and settings and information about
                                your activity in the Services
                                (such as the date/time stamps associated with your usage, pages and files viewed,
                                searches, and other actions you take such as which features you use), device event
                                information (such as system activity, error reports (sometimes called
                                "crash dumps"
                                ), and hardware settings).</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}><em>Device Data.</em> We collect device data such as
                                information about your computer, phone, tablet, or other device you use to access the
                                Services. Depending on the device used, this device data may include information such as
                                your IP address (or proxy server), device and application identification numbers,
                                location, browser type, hardware model, Internet service provider and/or mobile carrier,
                                operating system, and system configuration information.</Typography>
                        </li>
                        <li className={classes.bGap}>
                            <Typography variant={'body1'}><em>Location Data.</em> We collect location data such as
                                information about your device's location, which can be either precise or imprecise. How
                                much information we collect depends on the type and settings of the device you use to
                                access the Services. For example, we may use GPS and other technologies to collect
                                geolocation data that tells us your current location (based on your IP address). You can
                                opt out of allowing us to collect this information either by refusing access to the
                                information or by disabling your Location setting on your device. However, if you choose
                                to opt out, you may not be able to use certain aspects of the Services.</Typography>
                        </li>
                    </ul>

                    <Typography id={'2'} variant={'h4'} className={classes.mGap}>2. HOW DO WE PROCESS YOUR
                        INFORMATION?</Typography>
                    <Typography variant={'body1'} className={classes.mGap}><em><b>
                        In Short: </b>We process your information to provide, improve, and administer our Services,
                        communicate with you, for security and fraud prevention, and to comply with law. We may also
                        process your information for other purposes with your consent.</em>
                    </Typography>

                    <Typography variant={'body1'} className={classes.sGap}><b>
                        We process your personal information for a variety of reasons, depending on how you interact
                        with our Services, including: </b>
                    </Typography>
                    <ul>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}><b>To facilitate account creation and authentication and
                                otherwise manage user accounts.</b> We may process your information so you can create
                                and log in to your account, as well as keep your account in working order.</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}><b>To deliver and facilitate delivery of services to the
                                user.</b> We may process your information to provide you with the requested
                                service.</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}><b>To respond to user inquiries/offer support to users.</b> We
                                may process your information to respond to your inquiries and solve any potential issues
                                you might have with the requested service.</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}><b>To enable user-to-user communications.</b> We may process
                                your information if you choose to use any of our offerings that allow for communication
                                with another user.</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}><b>To request feedback.</b> We may process your information
                                when necessary to request feedback and to contact you about your use of our
                                Services.</Typography>
                        </li>
                        <li className={classes.bGap}>
                            <Typography variant={'body1'}><b>To evaluate and improve our Services, products, marketing,
                                and your experience.</b> We may process your information when we believe it is necessary
                                to identify usage trends, determine the effectiveness of our promotional campaigns, and
                                to evaluate and improve our Services, products, marketing, and your
                                experience.</Typography>
                        </li>

                    </ul>

                    <Typography id={'3'} variant={'h4'} className={classes.mGap}>3. WHAT LEGAL BASES DO WE RELY ON TO
                        PROCESS
                        YOUR INFORMATION?</Typography>
                    <Typography variant={'body1'} className={classes.mGap}><em><b>
                        In Short: </b>We only process your personal information when we believe it is necessary and we
                        have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your
                        consent, to comply with laws, to provide you with services to enter into or fulfill our
                        contractual obligations, to protect your rights, or to fulfill our legitimate business
                        interests.</em>
                    </Typography>

                    <Typography variant={'body1'} className={classes.mGap}><u><b>If you are located in Canada, this
                        section applies to you. </b></u>
                    </Typography>

                    <Typography variant={'body1'} className={classes.mGap}>We may process your information if you have
                        given us specific permission (i.e., express consent) to use your personal information for a
                        specific purpose, or in situations where your permission can be inferred (i.e., implied
                        consent). You can withdraw your consent at any time. Click <a href={'#'}> here </a> to learn
                        more.
                    </Typography>

                    <Typography variant={'body1'} className={classes.sGap}>In some exceptional cases, we may be legally
                        permitted under applicable law to process your information without your consent,including, for
                        example:
                    </Typography>
                    <ul>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>If collection is clearly in the interests of an individual and
                                consent cannot be obtained in a timely way</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>For investigations and fraud detection and
                                prevention</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>For business transactions provided certain conditions are
                                met</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>If it is contained in a witness statement and the collection
                                is necessary to assess, process, or settle an insurance claim</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>For identifying injured, ill, or deceased persons and
                                communicating with next of kin</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>If we have reasonable grounds to believe an individual has
                                been, is, or may be victim of financial abuse</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>If it is reasonable to expect collection and use with consent
                                would compromise the availability or the accuracy of the information and the collection
                                is reasonable for purposes related to investigating a breach of an agreement or a
                                contravention of the laws of Canada or a province</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>If disclosure is required to comply with a subpoena, warrant,
                                court order, or rules of the court relating to the production of records</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>If it was produced by an individual in the course of their
                                employment, business, or profession and the collection is consistent with the purposes
                                for which the information was produced</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}>If the collection is solely for journalistic, artistic, or
                                literary purposes</Typography>
                        </li>
                        <li className={classes.bGap}>
                            <Typography variant={'body1'}>If the information is publicly available and is specified by
                                the regulations</Typography>
                        </li>
                    </ul>

                    <Typography id={'4'} variant={'h4'} className={classes.mGap}>4. WHEN AND WITH WHOM DO WE SHARE YOUR
                        PERSONAL
                        INFORMATION?</Typography>
                    <Typography variant={'body1'} className={classes.mGap}><em><b>
                        In Short: </b>We may share information in specific situations described in this section and/or
                        with the following third parties.</em>
                    </Typography>
                    <Typography variant={'body1'} className={classes.sGap}>We
                        may need to share your personal information in the following situations:
                    </Typography>
                    <ul>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}><b>Business Transfers. </b> We may share or transfer your
                                information in connection with, or during negotiations of, any merger,sale of company
                                assets, financing, or acquisition of all or a portion of our business to another
                                company.</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}><b>When we use Google Maps Platform APIs. </b> We may share
                                your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places
                                API). To find out more about Google’s Privacy Policy, please refer to this <a
                                    href={'https://policies.google.com/privacy'}> link</a>. We
                                obtain and store on your device ("cache") your location. You may revoke your consent
                                anytime by contacting us at the contact details provided at the end of this
                                document.</Typography>
                        </li>
                        <li className={classes.sGap}>
                            <Typography variant={'body1'}><b>Other Users. </b> When you share personal information
                                or otherwise interact with public areas of the Services, such personal information may
                                be viewed by all users and may be publicly made available outside the Services in
                                perpetuity. Similarly, other users will be able to view descriptions of your activity,
                                communicate with you within our Services, and view your profile.</Typography>
                        </li>
                        <li className={classes.bGap}>
                            <Typography variant={'body1'}><b>Offer Wall. </b>Our application(s) may display a
                                third-party hosted "offer wall." Such an offer wall allows third-party advertisers to
                                offer virtual currency, gifts, or
                                other items to users in return for the acceptance and completion of an advertisement
                                offer. Such an offer wall may appear in our application(s) and be displayed to you based
                                on certain data, such as your geographic area or demographic information. When you click
                                on an offer wall, you will be brought to an external website belonging to other persons
                                and will leave our application(s). A unique identifier, such as your user ID, will be
                                shared with the offer wall provider in order to prevent fraud and properly credit your
                                account with the relevant reward. </Typography>
                        </li>
                    </ul>
                    <Typography id={'5'} variant={'h4'} className={classes.mGap}>5. DO WE USE COOKIES AND OTHER TRACKING
                        TECHNOLOGIES?</Typography>
                    <Typography variant={'body1'} className={classes.mGap}><em><b>
                        In Short: </b>We may use cookies and other tracking technologies to collect and store your
                        information.</em>
                    </Typography>
                    <Typography variant={'body1'} className={classes.bGap}>We may use cookies and similar tracking
                        technologies (like web beacons and pixels) to access or store information. Specific information
                        about how we use such technologies and how you can refuse certain cookies is set out in our
                        Cookie Notice.
                    </Typography>

                    <Typography id={'6'} variant={'h4'} className={classes.mGap}>6. HOW LONG DO WE KEEP YOUR
                        INFORMATION?</Typography>

                    <Typography variant={'body1'} className={classes.mGap}><em><b>
                        In Short: </b>We keep your information for as long as necessary to
                        fulfill the purposes outlined in this privacy notice unless otherwise required by law.</em>
                    </Typography>
                    <Typography variant={'body1'} className={classes.bGap}>We will only keep your personal information
                        for as long as it is necessary for the purposes set out in this privacy notice, unless a longer
                        retention period is required or permitted by law (such as tax, accounting, or other legal
                        requirements). No purpose in this notice will require us keeping your personal information for
                        longer than the period of time in which users have an account with us.
                    </Typography>

                    <Typography variant={'body1'} className={classes.bGap}>When we have no ongoing legitimate business
                        need to process your personal information, we will either delete or
                        anonymize such information, or, if this is not possible (for example, because your personal
                        information has been stored in backup archives), then we will securely store your personal
                        information and isolate it from any further processing until deletion is possible.
                    </Typography>

                    <Typography id={'7'} variant={'h4'} className={classes.mGap}>7. HOW DO WE KEEP YOUR INFORMATION
                        SAFE?</Typography>
                    <Typography variant={'body1'} className={classes.mGap}><em><b>
                        In Short: </b>We aim to protect your personal information through a system of
                        organizational
                        and technical security measures.</em>
                    </Typography>
                    <Typography variant={'body1'} className={classes.bGap}>
                        We have implemented appropriate and
                        reasonable technical and organizational security measures designed to protect the security of
                        any personal information we process. However, despite our safeguards and efforts to secure your
                        information, no electronic transmission over the Internet or information storage technology can
                        be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals,
                        or other unauthorized third parties will not be able to defeat our security and improperly
                        collect, access, steal, or modify your information. Although we will do our best to protect your
                        personal information, transmission of personal information to and from our Services is at your
                        own risk. You should only access the Services within a secure environment.
                    </Typography>


                    <Typography id={'8'} variant={'h4'} className={classes.mGap}>8. WHAT ARE YOUR PRIVACY
                        RIGHTS?</Typography>

                    <Typography variant={'body1'} className={classes.mGap}><em><b>
                        In Short: </b>In some regions, such as Canada, you have rights that allow you greater access to
                        and control over your personal information. You may review, change, or terminate your account at
                        any time.</em>
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        In some regions (like Canada), you have certain rights under applicable data protection laws.
                        These may include the right (i) to request access and obtain a copy of your personal
                        information, (ii) to request rectification or erasure; (iii) to restrict the processing of your
                        personal information; and (iv) if applicable, to data portability. In certain circumstances, you
                        may also have the right to object to the processing of your personal information. You can make
                        such a request by contacting us by using the contact details provided in the section <a
                        href={'#12'}>"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a> below.
                    </Typography>

                    <Typography variant={'body1'} className={classes.mGap}>
                        We will consider and act upon any request in accordance with applicable data protection laws.
                    </Typography>

                    <Typography variant={'body1'} className={classes.mGap}>
                        If you are located in the EEA or UK and you believe we are unlawfully processing your personal
                        information, you also have the right to complain to your local data protection supervisory
                        authority. You can find their contact details here: <a
                        href={'https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm'}>
                        https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm </a> .
                    </Typography>

                    <Typography variant={'body1'} className={classes.mGap}>
                        If you are located in Switzerland, the contact details for the data protection authorities are
                        available here: <a
                        href={'https://www.edoeb.admin.ch/edoeb/en/home.html'}> https://www.edoeb.admin.ch/edoeb/en/home.html </a> .
                    </Typography>

                    <Typography variant={'body1'} className={classes.mGap}>
                        <b><u>Withdrawing your consent: </u></b> If we are relying on your consent to process your
                        personal
                        information, which may be express and/or implied consent depending on the applicable law, you
                        have the right to withdraw your consent at any time. You can withdraw your consent at any time
                        by contacting us by using the contact details provided in the section <a href={'#12'}>"HOW CAN
                        YOU CONTACT US ABOUT THIS NOTICE?"</a> below.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        However, please note that this will not affect the lawfulness of the processing before its
                        withdrawal, nor when applicable law allows, will it affect the processing of your personal
                        information conducted in reliance on lawful processing grounds other than consent.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        <b><u>Opting out of marketing and promotional communications: </u></b> You can unsubscribe from
                        our marketing and promotional communications at any time by clicking on the unsubscribe link in
                        the emails that we send, or by contacting us using the details provided in the section<a
                        href={'#12'}>" HOW CAN YOU CONTACT US ABOUT THIS NOTICE? "</a>below. You will then be removed
                        from the marketing lists. However, we may still communicate with you — for example, to send you
                        service-related messages that are necessary for the administration and use of your account, to
                        respond to service requests, or for other non-marketing purposes.
                    </Typography>
                    <Typography variant={'h6'} className={classes.mGap}>Account Information</Typography>
                    <Typography variant={'body1'} className={classes.sGap}>
                        If you would at any time like to review or change the information in your account or terminate
                        your account, you can:
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant={'body1'} className={classes.sGap}>
                                Log in to your account settings and update your user account.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant={'body1'} className={classes.mGap}>
                                Contact us using the contact information provided.
                            </Typography>
                        </li>
                    </ul>

                    <Typography variant={'body1'} className={classes.mGap}>
                        Upon your request to terminate your account, we will deactivate or delete your account and
                        information from our active databases. However, we may retain some information in our files to
                        prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms
                        and/or comply with applicable legal requirements.
                    </Typography>

                    <Typography variant={'body1'} className={classes.bGap}>
                        If you have questions or comments about your privacy rights, you may email us at
                        info@getoffthegrid.ca .
                    </Typography>

                    <Typography id={'9'} variant={'h4'} className={classes.mGap}>9. CONTROLS FOR DO-NOT-TRACK
                        FEATURES</Typography>

                    <Typography variant={'body1'} className={classes.bGap}>
                        Most web browsers and some mobile operating systems and mobile applications include a
                        Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not
                        to have data about your online browsing activities monitored and collected. At this stage no
                        uniform technology standard for recognizing and implementing DNT signals has been finalized. As
                        such, we do not currently respond to DNT browser signals or any other mechanism that
                        automatically communicates your choice not to be tracked online. If a standard for online
                        tracking is adopted that we must follow in the future, we will inform you about that practice in
                        a revised version of this privacy notice.
                    </Typography>


                    <Typography id={'10'} variant={'h4'} className={classes.mGap}>10. DO CALIFORNIA RESIDENTS HAVE
                        SPECIFIC PRIVACY RIGHTS?</Typography>

                    <Typography variant={'body1'} className={classes.mGap}><em><b>
                        In Short: </b>Yes, if you are a resident of California, you are granted specific rights
                        regarding access to your personal information.</em>
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our
                        users who are California residents to request and obtain from us, once a year and free of
                        charge, information about categories of personal information (if any) we disclosed to third
                        parties for direct marketing purposes and the names and addresses of all third parties with
                        which we shared personal information in the immediately preceding calendar year. If you are a
                        California resident and would like to make such a request, please submit your request in writing
                        to us using the contact information provided below.
                    </Typography>

                    <Typography variant={'body1'} className={classes.mGap}>
                        If you are under 18 years of age, reside in California, and have a registered account with
                        Services, you have the right to request removal of unwanted data that you publicly post on the
                        Services. To request removal of such data, please contact us using the contact information
                        provided below and include the email address associated with your account and a statement that
                        you reside in California. We will make sure the data is not publicly displayed on the Services,
                        but please be aware that the data may not be completely or comprehensively removed from all our
                        systems (e.g., backups, etc.).
                    </Typography>

                    <Typography variant={'h6'} className={classes.mGap}>CCPA Privacy Notice</Typography>

                    <Typography variant={'body1'} className={classes.mGap}>
                        The California Code of Regulations defines a "resident" as:
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        (1) every individual who is in the State of California for other than a temporary or transitory
                        purpose and (2) every individual who is domiciled in the State of California who is outside the
                        State of California for a temporary or transitory purpose
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        All other individuals are defined as "non-residents."
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        If this definition of "resident" applies to you, we must adhere to certain rights and
                        obligations regarding your personal information.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        <b>What categories of personal information do we collect?</b>
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        We have collected the following categories of personal information in the past twelve (12)
                        months:
                    </Typography>
                    <table border={"1px"} className={classes.mGap}>
                        <tr>
                            <th><b>Category</b></th>
                            <th><b>Examples</b></th>
                            <th><b>Collected</b></th>
                        </tr>
                        <tr>
                            <td>A. Identifiers</td>
                            <td>Contact details, such as real name, alias, postal address,
                                telephone or mobile contact number, unique personal identifier, online identifier,
                                Internet Protocol address, email address, and account name
                            </td>
                            <td>YES</td>
                        </tr>
                        <tr>
                            <td>B. Personal information categories listed in the California Customer Records statute
                            </td>
                            <td>Name, contact information, education, employment, employment history, and financial
                                information
                            </td>
                            <td>YES</td>
                        </tr>
                        <tr>
                            <td>C. Protected classification characteristics under California or federal law</td>
                            <td>Gender and date of birth
                            </td>
                            <td>YES</td>
                        </tr>
                        <tr>
                            <td>D. Commercial information</td>
                            <td>Transaction information, purchase history, financial details, and payment information
                            </td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>E. Biometric information</td>
                            <td>Fingerprints and voiceprints
                            </td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>F. Internet or other similar network activity</td>
                            <td>Browsing history, search history, online
                                behavior, interest data,and interactions with our and other websites,
                                applications,systems, and advertisements
                            </td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>G. Geolocation data</td>
                            <td>Device location
                            </td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>H. Audio, electronic, visual, thermal,olfactory, or similar information</td>
                            <td>Images and audio, video or call recordings created in connection with our business
                                activities
                            </td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>I. Professional or employment-related information</td>
                            <td>Business contact details in order to provide you our services at a business level or job
                                title, work history, and professional qualifications if you apply for a job with us
                            </td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>J. Education Information</td>
                            <td>Student records and directory information
                            </td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>K. Inferences drawn from other personal information</td>
                            <td>Inferences drawn from any of the collected personal information listed above to create a
                                profile or summary about, for example, an individual’s preferences and characteristics
                            </td>
                            <td>NO</td>
                        </tr>
                    </table>

                    <Typography variant={'body1'} className={classes.sGap}>
                        We may also collect other personal information outside of these categories instances where you
                        interact with us in person, online, or by phone or mail in the context of:
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant={'body1'} className={classes.sGap}>
                                Receiving help through our customer support channels;
                            </Typography>
                        </li>
                        <li>
                            <Typography variant={'body1'} className={classes.mGap}>
                                Facilitation in the delivery of our Services and to respond to your inquiries.
                            </Typography>
                        </li>
                    </ul>

                    <Typography variant={'body1'} className={classes.mGap}>
                        <u>How do we use and share your personal information?</u>
                    </Typography>


                    <Typography variant={'body1'} className={classes.mGap}>
                        More information about our data collection and sharing practices can be found in this privacy
                        notice.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        You may contact us by email at info@getoffthegrid.ca, or by referring to the contact details at
                        the bottom of this document.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        If you are using an authorized agent to exercise your right to opt out we may deny a request if
                        the authorized agent does not submit proof that they have been validly authorized to act on your
                        behalf.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        <b>Will your information be shared with anyone else?</b>
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        We may disclose your personal information with our service providers pursuant to a written
                        contract between us and each service provider. Each service provider is a for-profit entity that
                        processes the information on our behalf.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        We may use your personal information for our own business purposes, such as for undertaking
                        internal research for technological development and demonstration. This is not considered to be
                        "selling" of your personal information.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        Equipement Off The Grid inc. has not disclosed or sold any personal information to third parties
                        for a business or commercial purpose in the preceding twelve (12) months. Equipement Off The
                        Grid inc. will not sell personal information in the future belonging to website visitors, users,
                        and other consumers.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        <b>Your rights with respect to your personal data</b>
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        <u>Right to request deletion of the data — Request to delete</u>
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        You can ask for the deletion of your personal information. If you ask us to delete your personal
                        information, we will respect your request and delete your personal information, subject to
                        certain exceptions provided by law, such as (but not limited to) the exercise by another
                        consumer of his or her right to free speech, our compliance requirements resulting from a legal
                        obligation, or any processing that may be required to protect against illegal activities.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        <u>Right to be informed — Request to know</u>
                    </Typography>
                    <Typography variant={'body1'} className={classes.sGap}>
                        Depending on the circumstances, you have a right to know:
                    </Typography>

                    <ul>
                        <li>
                            <Typography variant={'body1'} className={classes.sGap}>
                                whether we collect and use your personal information;
                            </Typography>
                        </li>
                        <li>
                            <Typography variant={'body1'} className={classes.sGap}>
                                the categories of personal information that we collect;
                            </Typography>
                        </li>
                        <li>
                            <Typography variant={'body1'} className={classes.sGap}>
                                the purposes for which the collected personal information is used;
                            </Typography>
                        </li>
                        <li>
                            <Typography variant={'body1'} className={classes.sGap}>
                                whether we sell your personal information to third parties;
                            </Typography>
                        </li>
                        <li>
                            <Typography variant={'body1'} className={classes.sGap}>
                                the categories of personal information that we sold or disclosed for a business purpose;
                            </Typography>
                        </li>
                        <li>
                            <Typography variant={'body1'} className={classes.sGap}>
                                the categories of third parties to whom the personal information was sold or disclosed
                                for a business purpose; and
                            </Typography>
                        </li>
                        <li>
                            <Typography variant={'body1'} className={classes.mGap}>
                                the business or commercial purpose for collecting or selling personal information.
                            </Typography>
                        </li>
                    </ul>
                    <Typography variant={'body1'} className={classes.mGap}>
                        In accordance with applicable law, we are not obligated to provide or delete consumer
                        information that is de-identified in response to a consumer request or to re-identify individual
                        data to verify a consumer request.
                    </Typography>
                    <Typography variant={'body1'} className={classes.mGap}>
                        <u>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</u>
                    </Typography>

                    <Typography variant={'body1'} className={classes.mGap}>
                        We will not discriminate against you if you exercise your privacy rights.
                    </Typography>

                    <Typography variant={'body1'} className={classes.mGap}>
                        <u>Verification process</u>
                    </Typography>

                    <Typography variant={'body1'} className={classes.mGap}>
                        Upon receiving your request, we will need to verify your identity to determine you are the same
                        person about whom we have the information in our system. These verification efforts require us
                        to ask you to provide information so that we can match it with information you have previously
                        provided us. For instance, depending on the type of request you submit, we may ask you to
                        provide certain information so that we can match the information you provide with the
                        information we already have on file, or we may contact you through a communication method (e.g.,
                        phone or email) that you have previously provided to us. We may also use other verification
                        methods as the circumstances dictate.
                    </Typography>

                    <Typography variant={'body1'} className={classes.mGap}>
                        We will only use personal information provided in your request to verify your identity or
                        authority to make the request. To the extent possible, we will avoid requesting additional
                        information from you for the purposes of verification. However, if we cannot verify your
                        identity from the information already maintained by us, we may request that you provide
                        additional information for the purposes of verifying your identity and for security or
                        fraud-prevention purposes. We will delete such additionally provided information as soon as we
                        finish verifying you.
                    </Typography>

                    <Typography variant={'body1'} className={classes.mGap}>
                        <u>Other privacy rights</u>
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant={'body1'} className={classes.sGap}>
                                You may object to the processing of your personal information.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant={'body1'} className={classes.sGap}>
                                You may request correction of your personal data if it is incorrect or no longer
                                relevant, or ask to restrict the processing of the information.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant={'body1'} className={classes.sGap}>
                                You can designate an authorized agent to make a request under the CCPA on your behalf.
                                We may deny a request from an authorized agent that does not submit proof that they have
                                been validly authorized to act on your behalf in accordance with the CCPA.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant={'body1'} className={classes.mGap}>
                                You may request to opt out from future selling of your personal information to third
                                parties. Upon receiving an opt-out request, we will act upon the request as soon as
                                feasibly possible, but no later than fifteen (15) days from the date of the request
                                submission.
                            </Typography>
                        </li>
                    </ul>
                    <Typography variant={'body1'} className={classes.bGap}>
                        To exercise these rights, you can contact us by email at info@getoffthegrid.ca, or by referring
                        to the contact details at the bottom of this document. If you have a complaint about how we
                        handle your data, we would like to hear from you.
                    </Typography>

                    <Typography id={'11'} variant={'h4'} className={classes.mGap}>11. DO WE MAKE UPDATES TO THIS
                        NOTICE?</Typography>
                    <Typography variant={'body1'} className={classes.mGap}><em><b>
                        In Short: </b>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
                    </Typography>

                    <Typography variant={'body1'} className={classes.bGap}>
                        We may update this privacy notice from time to time. The updated version will be indicated by an
                        updated "Revised" date and the updated version will be effective as soon as it is accessible. If
                        we make material changes to this privacy notice, we may notify you either by prominently posting
                        a notice of such changes or by directly sending you a notification. We encourage you to review
                        this privacy notice frequently to be informed of how we are protecting your information.
                    </Typography>


                    <Typography id={'12'} variant={'h4'} className={classes.mGap}>12. HOW CAN YOU CONTACT US ABOUT THIS
                        NOTICE?</Typography>

                    <Typography variant={'body1'} className={classes.mGap}>If you have questions or comments about this
                        notice, you may contact our Data Protection Officer (DPO), Mathis Dufrasnes, by email at
                        mathis@getoffthegrid.ca.
                    </Typography>

                    <Typography variant={'body1'} className={classes.mGap}>If you have any further questions or
                        comments, you may also contact us by post at the following corporate address:
                    </Typography>

                    <Typography variant={'body1'}>Equipement Off The Grid inc.</Typography>

                    <Typography variant={'body1'}>1815 rue du bocage</Typography>

                    <Typography variant={'body1'}>Saint-Bruno, Quebec J3V4M7</Typography>

                    <Typography variant={'body1'}>Canada</Typography>

                    <Typography variant={'body1'} className={classes.bGap}>Phone: (+33)0695172137</Typography>


                    <Typography id={'13'} variant={'h4'} className={classes.mGap}>13. HOW CAN YOU REVIEW, UPDATE, OR
                        DELETE THE DATA WE COLLECT FROM YOU?</Typography>
                    <Typography variant={'body1'} className={classes.finalGap}>
                        Based on the applicable laws of your country, you may have the right to request access to the
                        personal information we collect from you, change that information, or delete it. To request to
                        review, update, or delete your personal information, please submit a request form by clicking <a href={'https://app.termly.io/notify/6ad6cc93-887b-4c4c-bdca-90f00c067c74'}>here</a> .
                    </Typography>
                    <Divider/>
                </div>
            </div>
        </Fragment>
    );
}

