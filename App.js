import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

// 1.txt 메뉴 리스트
const MENU_LIST = [
  '등갈비김치찜', '감자탕', '등촌샤브칼국수', '마라탕', '치즈곱창', '족발', '양꼬치',
  '마라샹궈', '크림새우', '해물볶음우동', '초밥', '육회', '연어', '생새우', '대방어',
  '과메기', '햄버거', '파스타', '피자', '치킨', '치즈돈까스', '고치돈', '불닭볶음면',
  '쫄볶이', '훈제오리', '닭갈비', '소곱창', '막창', '갈비찜', '삼겹살', '항정살',
  '차돌된장찌개', '소꼬리찜', '김치우동', '차돌짬뽕', '간짜장', '훠궈', '딤섬',
  '오므라이스', '떡순튀', '타코야끼', '텐동', '규카츠', '야끼소바', '오코노미야끼',
  '빠에야', '감바스', '퀘사디아', '치미창가', '팟타이', '타코', '부리또', '분짜',
  '쌀국수', '월남쌈', '함박스테이크', '찹스테이크', '참치김밥', '쫄면', '유부초밥',
  '후토마끼', '비빔국수', '칼국수', '잔치국수', '홍합탕', '바지락술찜', '순대볶음',
  '제육볶음', '짜글이', '짜계치', '닭도리탕', '김치볶음밥', '알밥', '마파두부',
  '닭한마리', '낚지볶음', '닭강정', '닭꼬치', '소불고기', '함흥냉면', '갈비탕',
  '부대찌개', '순두부찌개', '굴국밥', '순대국밥', '알탕', '곱창전골', '낙곱새',
  '회덮밥', '물회', '아구찜', '해물찜', '곱도리탕', '왕만두', '찐빵', '비빔밥',
  '무뼈국물닭발', '오돌뼈', '오삼불고기', '간장게장', '양념게장', '새우장', '연어장',
  '대하구이', '장어구이', '감자튀김', '즉석떡볶이', '두부전골', '묵은지찜닭',
  '안동찜닭', '김치전', '해물파전', '치즈감자전', '붕어빵', '국화빵', '호떡', '어묵'
];

export default function App() {
  const [selectedMenu, setSelectedMenu] = useState('버튼을 눌러주세요!');
  const [isSpinning, setIsSpinning] = useState(false);

  const pickRandomMenu = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    // 룰렛 효과: 여러 메뉴를 빠르게 보여준 후 최종 선택
    let count = 0;
    const maxCount = 15;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * MENU_LIST.length);
      setSelectedMenu(MENU_LIST[randomIndex]);
      count++;

      if (count >= maxCount) {
        clearInterval(interval);
        // 최종 선택
        const finalIndex = Math.floor(Math.random() * MENU_LIST.length);
        setSelectedMenu(MENU_LIST[finalIndex]);
        setIsSpinning(false);
      }
    }, 100);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>오늘 뭐 먹지?</Text>
      <Text style={styles.subtitle}>총 {MENU_LIST.length}개 메뉴</Text>

      <View style={styles.resultContainer}>
        <Text style={[styles.result, isSpinning && styles.spinning]}>
          {selectedMenu}
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, isSpinning && styles.buttonDisabled]}
        onPress={pickRandomMenu}
        disabled={isSpinning}
      >
        <Text style={styles.buttonText}>
          {isSpinning ? '선택 중...' : '🎲 랜덤 선택!'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#eee',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 40,
  },
  resultContainer: {
    backgroundColor: '#16213e',
    paddingVertical: 40,
    paddingHorizontal: 50,
    borderRadius: 20,
    marginBottom: 40,
    minWidth: 250,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e94560',
  },
  result: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e94560',
    textAlign: 'center',
  },
  spinning: {
    color: '#0f3460',
  },
  button: {
    backgroundColor: '#e94560',
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#e94560',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: '#555',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});
