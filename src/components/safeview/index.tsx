import { ScrollView, StatusBar, useColorScheme, type RefreshControlProps, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from "./safeview.styles";
import { sizes, colors } from '@/common/theme';

interface SafeViewProps {
    bg?: string;
    scrollRef?: React.Ref<ScrollView>;
    withPadding?: boolean;
    withScrollElement?: boolean;
    scrollEnabled?: boolean;
    children: React.ReactNode;
    refreshControl?: React.ReactElement<RefreshControlProps>;
}

export default function SafeView(props:SafeViewProps) {
    const colorScheme = useColorScheme();

    const { 
        bg = colorScheme === "dark" ? colors.dark : colors.light,
        children, 
        scrollRef,
        withScrollElement = true, 
        withPadding=true, 
        scrollEnabled=true,
        refreshControl,
    } = props;
    
    const resolvePadding = withPadding ? sizes.base * 2 : 0;
    return (
        <>
            <SafeAreaView 
                style={[styles.parent, {backgroundColor:bg}]} 
                edges={["top"]}
            >
                <StatusBar
                    translucent={true}
                    animated={true}
                    barStyle="dark-content"
                    backgroundColor="transparent"
                />

                {withScrollElement ? (
                    <ScrollView 
                        ref={scrollRef}
                        style={{backgroundColor: bg}}
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
        </>
    )
}