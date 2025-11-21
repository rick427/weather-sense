import { useMemo } from "react";
import { View, TouchableOpacity } from "react-native";
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import styles from "./county-list.styles";
import Text from "@/components/text";
import Title from "@/components/title";
import Stack from "@/components/stack";
import Group from "@/components/group";
import LucideIcon from "@/components/lucide-Icon";

import { colors } from "@/common/theme";
import { useFilterStore } from "@/store/filter.store";
import { type CountyItem, KENYA_COUNTIES } from "@/common/data";

interface Props {
    reset: () => void;
}

export default function CountyList({reset}:Props) {
    const { city, setCity } = useFilterStore(state => state);

    const data = useMemo(() => 
        [...KENYA_COUNTIES].sort((a, b) => a.label.localeCompare(b.label)), 
    [])

    function onSelect(item:CountyItem){
        setCity(item.query);
        reset();
    }

    return (
        <BottomSheetFlatList 
            data={data}
            keyExtractor={(i:CountyItem) => i.id}
            contentContainerStyle={styles.list}
            renderItem={({item}:{ item: CountyItem }) => {
                const active = item.query === city;
                return (
                    <TouchableOpacity
                        onPress={() => onSelect(item)}
                        style={styles.item}
                    >
                        <Group>
                            <View style={[styles.itemIcon, {backgroundColor: active ? colors.success : colors.gray_2}]}>
                                <LucideIcon 
                                    name={active ? "Check" : "MapPin"} 
                                    size={22} 
                                    strokeWidth={1.5} 
                                    color={active ? colors.light : colors.muted} 
                                />
                            </View>
                            <Stack gap={5}>
                                <Title style={styles.itemTitle}>
                                    {item.label}
                                </Title>
                                <Text style={styles.itemText}>
                                    Cap/ {item.capital}
                                </Text>
                            </Stack>
                        </Group>

                        <Stack gap={5} align="flex-end">
                            <Text style={styles.itemTitle}>
                                {item.region}
                            </Text>
                            <Text style={styles.itemText}>
                                Area/ {item.area.toLocaleString()} km²
                            </Text>
                        </Stack>
                    </TouchableOpacity>
                )
            }}
        />
    )
}