import { View } from 'react-native';

import styles from "./home-styles";
import Text from '@/components/text';
import Title from '@/components/title';
import Group from '@/components/group';
import Stack from '@/components/stack';
import SafeView from '@/components/safeview';
import LucideIcon from '@/components/lucideIcon';

import { colors } from '@/common/theme';

export default function Home() {
    return (
        <SafeView>
           
                <Stack gap={10} align='center'>
                    <View style={styles.badge}>
                        <Text style={styles.badgeLabel}>
                            Friday, 20 November
                        </Text>
                    </View>
                    <Title style={styles.cityLabel}>
                        Nairobi
                    </Title>
                </Stack>

                <Stack align='center'>
                    <Title style={styles.title}>
                        31°
                    </Title>
                    <Text style={styles.subtitle}>
                        Sunny With Scattered Clouds H:56° L:34°
                    </Text>

                    <View style={styles.box}>
                        <Text style={styles.boxLabel}>
                            Intermittent clouds between 4 - 5pm, accompanied by a high 
                            temparature of 56 degrees and a low of 34 degrees.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Stack gap={10} align='center'>
                            <LucideIcon name="Wind" size={30} color={colors.light} />
                            <Stack gap={5} align='center'>
                                <Title style={styles.cardTitle}>4km/h</Title>
                                <Text style={styles.cardSubtitle}>Wind</Text>
                            </Stack>
                        </Stack>

                        <Stack gap={10} align='center'>
                            <LucideIcon name="Droplets" size={30} color={colors.light} />
                            <Stack gap={5} align='center'>
                                <Title style={styles.cardTitle}>48.5%</Title>
                                <Text style={styles.cardSubtitle}>Humiditiy</Text>
                            </Stack>
                        </Stack>

                        <Stack gap={10} align='center'>
                            <LucideIcon name="DraftingCompass" size={30} color={colors.light} />
                            <Stack gap={5} align='center'>
                                <Title style={styles.cardTitle}>1.6km</Title>
                                <Text style={styles.cardSubtitle}>Visibility</Text>
                            </Stack>
                        </Stack>
                    </View>

                    <Stack style={{alignSelf: "stretch"}}>
                        <Group justify='space-between' align='center'>
                            <Title style={styles.pageLabel}>
                                Weekly Forecast
                            </Title>
                            <LucideIcon name="MoveRight" />
                        </Group>

                        <Group justify="space-between" align='center'>
                            <View style={styles.paper}>
                                <Title style={styles.paperTitle}>26°</Title>
                                <LucideIcon name="Sun" />
                                <Text style={styles.paperSubtitle}>21 Jan</Text>
                            </View>
                            <View style={styles.paper}>
                                <Title style={styles.paperTitle}>25°</Title>
                                <LucideIcon name="Sun" />
                                <Text style={styles.paperSubtitle}>22 Jan</Text>
                            </View>
                            <View style={styles.paper}>
                                <Title style={styles.paperTitle}>27°</Title>
                                <LucideIcon name="Sun" />
                                <Text style={styles.paperSubtitle}>23 Jan</Text>
                            </View>
                            <View style={styles.paper}>
                                <Title style={styles.paperTitle}>26°</Title>
                                <LucideIcon name="Sun" />
                                <Text style={styles.paperSubtitle}>24 Jan</Text>
                            </View>
                        </Group>
                    </Stack>
                </Stack>
            
        </SafeView>
    )
}