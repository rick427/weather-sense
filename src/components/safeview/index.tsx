import { ScrollView, StatusBar, RefreshControlProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from "./safeview.styles";
import { sizes } from '@/common/theme';

interface SafeViewProps {
    scrollRef?: React.Ref<ScrollView>;
    withPadding?: boolean;
    withScrollElement?: boolean;
    scrollEnabled?: boolean;
    children: React.ReactNode;
    refreshControl?: React.ReactElement<RefreshControlProps>;
}

export default function SafeView(props:SafeViewProps) {
    const { 
        children, 
        scrollRef,
        withScrollElement = true, 
        withPadding=true, 
        scrollEnabled=true,
        refreshControl,
    } = props;
    
    const resolvePadding = withPadding ? sizes.base * 2 : 0;
    return (
        <SafeAreaView style={styles.parent} edges={['top']}>
            <StatusBar
                translucent={true}
                animated={true}
                barStyle="dark-content"
                backgroundColor="transparent"
            />

            {withScrollElement ? (
                <ScrollView 
                    ref={scrollRef}
                    refreshControl={refreshControl}
                    scrollEnabled={scrollEnabled}
                    contentContainerStyle={[
                        styles.main, 
                        {
                            padding: resolvePadding,
                        }
                    ]}
                    showsVerticalScrollIndicator={false}
                >
                    {children}
                </ScrollView>
            ) : children}
        </SafeAreaView>
    )
}