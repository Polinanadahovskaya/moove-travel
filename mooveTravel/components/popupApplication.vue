<template>
  <div class="popup-comp" :class="{'popup-comp-background': route.path === '/blog'}">
    <div class="popup-body"
         :class="{'background-yellow': route.path === '/about', 'index-popup': route.path === '/', 'blur-background': route.path === '/blog', 'blog-popup': route.path === '/blog'}">
      <div v-if="route.path === '/'" class="popup-darken"></div>
      <div class="header-popup" :class="{'left': isMobile && route.path === '/Travel-gids' || isTablet && route.path === '/Travel-gids'}">
        <div v-if="route.path !== '/blog'" class="popup-header" :class="{'text': route.path === '/', 'desp-none':  route.path === '/Travel-gids' && isMobile ||route.path === '/Travel-gids' && isTablet }"><span>ОСТАВЬ ЗАЯВКУ </span>НА
          ПОДБОР ТУРА
          <div class="popup-line" :class="{'line-white': route.path === '/'}"></div>
        </div>
        <div v-if="route.path === '/blog'" class="popup-header header-blog"><span>НУЖНА ПОМОЩЬ </span>С ПОДБОРОМ ТУРА?
          <div class="popup-line"></div>
        </div>
        <div v-if="isMobile && route.path === '/Travel-gids'|| isTablet && route.path === '/Travel-gids'" class="popup-header header-blog" :class="{'color-red':isMobile && route.path === '/Travel-gids' || isTablet && route.path === '/Travel-gids'}">ПОДБЕРЕМ ТУР ДЛЯ ВАС
        </div>
      </div>
      <div class="popup-inputs">
        <div class="pop-in" :class="{'mobile-border': isMobile && route.path === '/Travel-gids' ||  isTablet && route.path === '/Travel-gids' || route.path === '/article'}">
          <input
              class="popup-input"
              :class="{'error' : nameError}"
              type="text"
              id="userName"
              name="userName"
              placeholder=" "
              v-model="name"
              @input="handleNameInput"
              @blur="validateName"
          >
          <label class="popup-label" for="userName">Имя</label>
          <div v-if="nameError" class="error-message">{{ nameError }}</div>
        </div>
        <div class="pop-in" :class="{'mobile-border': isMobile && route.path === '/Travel-gids' ||  isTablet && route.path === '/Travel-gids' || route.path === '/article'}">
          <input
              ref="phoneInput"
              class="popup-input"
              :class="{'error': phoneError}"
              v-model="phone"
              type="tel"
              id="userTel"
              @blur="validatePhone"
              @input="handlePhoneInput"
              name="userTel"
              placeholder=" "
          >
          <label class="popup-label" for="userTel">Номер телефона </label>
          <div v-if="phoneError" class="error-message">{{ phoneError }}</div>
        </div>
        <div class="pop-in" :class="{'mobile-border': isMobile && route.path === '/Travel-gids' || isTablet && route.path === '/Travel-gids' || route.path === '/article'}">
          <input
              class="popup-input"
              :class="{ 'error': emailError }"
              type="email"
              id="emailId"
              name="emailId"
              placeholder=" "
              v-model="email"
              @blur="validateEmail"
              @input="handleEmailInput"
          >
          <label class="popup-label" for="emailId">Email</label>
          <div v-if="emailError" class="error-message">{{ emailError }}</div>
        </div>
      </div>
      <div class="popup-questions" :class="{'text': route.path === '/', 'text-white': route.path === '/blog' && isMobile || route.path === '/blog' && isTablet}">Предпочтительный формат связи</div>
      <div class="popup-checkbox">
        <div class="checkbox-element">
          <input class="checkbox-input" type="checkbox" id="checkbox-phone" name="checkbox-phone"
                 v-model="contactByPhone" @change="validateForm"/>
          <label for="checkbox-phone"></label>
          <div class="checkbox-text" :class="{'color-black': route.path === '/about' || route.path === '/blog', 'text-black': isMobile && route.path === '/Travel-gids' || isTablet && route.path === '/Travel-gids' || route.path === '/article','text-white': route.path === '/blog' && isMobile || route.path === '/blog' && isTablet}">Звонок
            по телефону
          </div>
        </div>
        <div class="checkbox-element">
          <input class="checkbox-input" type="checkbox" id="checkbox-email" name="checkbox-email"
                 v-model="contactByEmail" @change="validateForm"/>
          <label for="checkbox-email"></label>
          <div class="checkbox-text" :class="{'color-black': route.path === '/about' || route.path === '/blog', 'text-black': isTablet && route.path === '/Travel-gids' || isMobile && route.path === '/Travel-gids' || route.path === '/article','text-white': route.path === '/blog' && isTablet || route.path === '/blog' && isMobile}">Письмо
            на электронную почту
          </div>
        </div>
        <div class="checkbox-element">
          <input class="checkbox-input" type="checkbox" id="checkbox-whats" name="checkbox-whats"
                 v-model="contactByWhatsApp" @change="validateForm"/>
          <label for="checkbox-whats"></label>
          <div class="checkbox-text" :class="{'color-black': route.path === '/about' || route.path === '/blog', 'text-black': isMobile && route.path === '/Travel-gids' ||  isTablet && route.path === '/Travel-gids' || route.path === '/article','text-white': route.path === '/blog' && isMobile || route.path === '/blog' && isTablet}">
            Сообщение в WhatsApp
          </div>
        </div>
      </div>
      <div v-if="contactError" class="error-message">{{ contactError }}</div>
      <div class="popup-giv-button">
        <div v-if="isMobile || isTablet" class="giv-lid" :class="{'color-black': route.path === '/about' || isTablet && route.path === '/Travel-gids' || isMobile && route.path === '/Travel-gids', 'text-white': route.path === '/blog'}">
          Нажимая «Оставить заявку» вы даёте согласие <br/> на <NuxtLink to="/loyarInformation"
            :class="{'color-link': route.path === '/about' || isTablet && route.path === '/Travel-gids' || isMobile && route.path === '/Travel-gids', 'text-white': route.path === '/blog'}" class="giv-lid-href">
          обработку<br/> персональных данных.</NuxtLink></div>
        <div class="popup-button" :class="{'button-blog': route.path === '/blog'}" @click="submitForm">Оставить заявку
        </div>
      </div>
      <div class="lid-container">
        <div v-if="!isMobile && !isTablet" class="giv-lid"
             :class="{'color-black': route.path === '/about' || route.path === '/blog'}">Нажимая «Оставить заявку» <br/>
          вы даёте согласие на <NuxtLink to="/loyarInformation" :class="{'color-link': route.path === '/about' || route.path === '/blog'}"
                                  class="giv-lid-href"> обработку<br/> персональных данных.</NuxtLink></div>
      </div>
    </div>
    <div v-if="notification" :class="['popup-notification', notificationType]">
      {{ notification }}
    </div>
  </div>
</template>
<script setup>
import {ref, onMounted, onUnmounted, computed, watch} from 'vue'
import {useRoute} from '#app'
import IMask from 'imask'

defineOptions({
  name: "popupApplication",
})

const windowWidth = ref(
  typeof window !== 'undefined' ? window.innerWidth : 1201 // desktop по умолчанию для SSR
);

const updateWindowWidth = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth;
  }
};

const isMobile = computed(() => windowWidth.value <= 576);
const isTablet = computed(() => windowWidth.value > 576 && windowWidth.value <= 1200);

console.log(isTablet.value,'isTablet')
console.log(isMobile.value,'isMobile')
onMounted(() => {
  updateWindowWidth();
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateWindowWidth);
  }

  // Инициализация IMask для телефона
  if (phoneInput.value) {
    IMask(phoneInput.value, {
      mask: [
        {
          mask: '+{7} (000) 000-00-00',
          startsWith: '7',
          country: 'Russia'
        },
        {
          mask: '+{375} (00) 000-00-00',
          startsWith: '375',
          country: 'Belarus'
        },
        {
          mask: '+{380} (00) 000-00-00',
          startsWith: '380',
          country: 'Ukraine'
        },
        {
          mask: '+{1} (000) 000-0000',
          startsWith: '1',
          country: 'USA'
        },
        {
          mask: '+0000000000000',
        }
      ],
      dispatch: function (appended, dynamicMasked) {
        const number = (dynamicMasked.value + appended).replace(/\D/g, '')
        return dynamicMasked.compiledMasks.find(m => number.indexOf(m.startsWith) === 0) || dynamicMasked.compiledMasks[dynamicMasked.compiledMasks.length - 1]
      }
    })
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateWindowWidth);
  }
})

const email = ref('')
const emailError = ref('')

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!email.value) {
    emailError.value = 'Email обязателен для заполнения'
    return false
  }

  if (!emailRegex.test(email.value)) {
    emailError.value = 'Введите корректный email адрес'
    return false
  }

  emailError.value = ''
  return true
}

const handleEmailInput = (event) => {
  const inputValue = event.target.value

  const transliterationMap = {
    'й': 'q', 'ц': 'w', 'у': 'e', 'к': 'r', 'е': 't', 'н': 'y', 'г': 'u', 'ш': 'i', 'щ': 'o', 'з': 'p',
    'ф': 'a', 'ы': 's', 'в': 'd', 'а': 'f', 'п': 'g', 'р': 'h', 'о': 'j', 'л': 'k', 'д': 'l',
    'я': 'z', 'ч': 'x', 'с': 'c', 'м': 'v', 'и': 'b', 'т': 'n', 'ь': 'm',
    'Й': 'Q', 'Ц': 'W', 'У': 'E', 'К': 'R', 'Е': 'T', 'Н': 'Y', 'Г': 'U', 'Ш': 'I', 'Щ': 'O', 'З': 'P',
    'Ф': 'A', 'Ы': 'S', 'В': 'D', 'А': 'F', 'П': 'G', 'Р': 'H', 'О': 'J', 'Л': 'K', 'Д': 'L',
    'Я': 'Z', 'Ч': 'X', 'С': 'C', 'М': 'V', 'И': 'B', 'Т': 'N', 'Ь': 'M'
  }

  const transliteratedValue = inputValue.replace(/[а-яА-Я]/g, (match) => {
    return transliterationMap[match] || match
  })

  email.value = transliteratedValue.toLowerCase()

  if (emailError.value) {
    emailError.value = ''
  }
}

const name = ref('')
const nameError = ref('')

const handleNameInput = (event) => {
  const inputValue = event.target.value

  const filteredValue = inputValue
      .replace(/[^а-яА-Яa-zA-Z\s-]/g, '')
      .replace(/^[\s-]+/, '')
      .replace(/\s+/g, ' ')
      .replace(/-+/g, '-')

  name.value = filteredValue

  if (nameError.value) {
    nameError.value = ''
  }
}

const validateName = () => {
  if (!name.value.trim()) {
    nameError.value = 'Имя обязательно к заполнению'
    return false
  }

  if (name.value.length < 2) {
    nameError.value = 'Имя должно содержать минимум 2 символа'
    return false
  }

  const nameRegex = /^[а-яА-Яa-zA-Z]+[\sа-яА-Яa-zA-Z-]*[а-яА-Яa-zA-Z]+$/
  if (!nameRegex.test(name.value)) {
    nameError.value = 'Введите корректное имя'
    return false
  }

  nameError.value = ''
  return true
}

const phone = ref('')
const phoneError = ref('')

const handlePhoneInput = (event) => {
  let value = event.target.value.replace(/[^\d+]/g, '')
  if (value[0] !== '+') value = '+' + value.replace(/^\+/, '')
  phone.value = value
  if (phoneError.value) phoneError.value = ''
}

const phoneInput = ref(null)

const route = useRoute()
console.log(route.path, 'route.path')

const contactByPhone = ref(false)
const contactByEmail = ref(false)
const contactByWhatsApp = ref(false)
const contactError = ref('')

const isPhoneRequired = computed(() => contactByPhone.value || contactByWhatsApp.value)
const isEmailRequired = computed(() => contactByEmail.value)
const bothRequired = computed(() => contactByEmail.value && (contactByPhone.value || contactByWhatsApp.value))

const validateForm = () => {
  let valid = true
  if (!contactByPhone.value && !contactByEmail.value && !contactByWhatsApp.value) {
    contactError.value = 'Выберите хотя бы один способ связи';
    valid = false;
  } else {
    contactError.value = '';
  }
  if (bothRequired.value) {
    valid = validatePhone() & validateEmail() && valid
  } else if (isPhoneRequired.value) {
    valid = validatePhone() && valid
    emailError.value = ''
  } else if (isEmailRequired.value) {
    valid = validateEmail() && valid
    phoneError.value = ''
  }
  valid = validateName() && valid
  return !!valid
}

const notification = ref("");
const notificationType = ref(""); // success или error

const submitForm = () => {
  let data = {
    phone: phone.value,
    email: email.value,
    name: name.value,
  }
  if (validateForm()) {
    fetch('https://example.com/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(() => {
          notification.value = 'Заявка отправлена!';
          notificationType.value = 'success';
        })
        .catch(() => {
          notification.value = 'Ошибка при отправке заявки. Попробуйте позже.';
          notificationType.value = 'error';
        });
  }
}

const validatePhone = () => {
  const digits = phone.value.replace(/\D/g, '')
  if (!digits) {
    phoneError.value = 'Телефон обязателен для заполнения'
    return false
  }

  if (digits.length < 10) {
    phoneError.value = 'Введите корректный номер телефона'
    return false
  }
  phoneError.value = ''
  return true
}

watch([contactByPhone, contactByEmail, contactByWhatsApp], () => {
  if (contactByPhone.value || contactByEmail.value || contactByWhatsApp.value) {
    contactError.value = '';
  }
});

watch(windowWidth, (val) => {
  console.log('windowWidth changed:', val);
});
watch(isMobile, (val) => {
  console.log('isMobile changed:', val);
});
watch(isTablet, (val) => {
  console.log('isTablet changed:', val);
});
</script>
<style scoped>
.left{
  justify-content: flex-start !important;
}
.background-yellow {
  background: linear-gradient(135.26deg, #FFDEB0 17.41%, #FFC472 51.02%);
}

.popup-comp {
  padding: 180px auto;
}

.popup-comp-background {
  @media (min-width: 1200px) {
    background: url("/src/assets/images/popupBack.png");
    padding: 176px 182px;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.pop-in {
  position: relative;
}

.popup-label {
  position: absolute;
  z-index: 99999;
  top: 29px;
  left: 43px;
  font-weight: 500;
  font-size: 36px;
  line-height: 100%;
  color: #C3C3C3;
  transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
  pointer-events: none;
  @media (max-width: 1200px) {
    font-size: 18px;
    top: 14px;
    left: 13px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
    top: 12px;
  }
  @media (max-width: 576px) {
    font-size: 8px;
    top: 12px;
  }
}

.popup-input:focus-visible ~ .popup-label,
.popup-input:not(:placeholder-shown) ~ .popup-label {
  top: 10px;
  font-size: 24px;
  @media (max-width: 1200px) {
      font-size: 24px;
      top: 7px;
  }
  @media (max-width: 768px) {
      font-size: 14px;
      top: 7px;
  }
  @media (max-width: 576px) {
      font-size: 5px;
      top: 7px;
  }
}

.popup-body {
  width: 100%;
  border-radius: 34px;
  padding: 60px 65px;
  margin-bottom: 180px;
  position: relative;
  z-index: 2;
  @media (max-width: 1200px) {
    padding: 40px 34px;
    border-radius: 6px;
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    padding: 30px 24px 20px;
    border-radius: 6px;
    margin-bottom: 40px;
  }
  @media (max-width: 576px) {
    padding: 20px 14px 8px;
    border-radius: 6px;
    margin-bottom: 40px;
  }
}

.popup-header {
  color: #C75454;
  font-weight: 700;
  font-size: 51px;
  line-height: 100%;
  vertical-align: middle;
  @media (max-width: 1200px) {
    font-size: 34px;
    vertical-align: middle;
  }
  @media (max-width: 768px) {
    font-size: 22px;
    vertical-align: middle;
  }
  @media (max-width: 576px) {
    font-size: 14px;
    vertical-align: middle;
  }
}
.header-blog{
  @media (max-width: 1200px) {
    color: #FFFFFF;
  }
}

.color-red{
  @media (max-width: 1200px) {
    color: #C75454;

  }
}

.popup-line {
  border-bottom: 6px solid #C75454;
  width: 525px;
  margin: 10px 0 47px;
  @media (max-width: 1200px) {
    display: none;
  }
}

.popup-inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
  @media (max-width: 1200px) {
    gap: 10px;
  }
  @media (max-width: 576px) {
    gap: 5px;
  }
}

.popup-input {
  width: 100%;
  height: 101px;
  padding: 16px 43px;
  border-radius: 17px;
  background: #FFFFFF;
  border: none;
  transition: border-color 0.3s ease;
  font-weight: 400;
  font-size: 26px;
  line-height: 100%;
  vertical-align: middle;
  @media (max-width: 1200px) {
    height: 52px;
    border-radius: 10px;
    padding: 16px 15px;
  }
  @media (max-width: 768px) {
    height: 42px;
    border-radius: 8px;
    padding: 16px 10px;
  }
  @media (max-width: 576px) {
    height: 32px;
    border-radius: 6px;
    padding: 16px 8px;
  }
}

.popup-input.error {
  border: 2px solid #ff4444;
}

.error-message {
  color: #ff4444;
  font-size: 14px;
  margin-top: 5px;
  font-weight: 500;
  @media (max-width: 576px) {
    font-size: 8px;
    top: 12px;
    left: 13px;
  }
}

.popup-questions {
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  vertical-align: middle;
  margin-top: 20px;
  @media (max-width: 1200px) {
    font-weight: 700;
    font-size: 28px;
    margin-top: 18px;
  }
  @media (max-width: 768px) {
    font-weight: 700;
    font-size: 20px;
    margin-top: 15px;
  }
  @media (max-width: 576px) {
    font-weight: 700;
    font-size: 8px;
    margin-top: 10px;
  }
}

.popup-checkbox {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  width: 98%;
  justify-content: space-between;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 17px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 13px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 9px;
  }
}

.popup-button {
  margin-top: 65px;
  background: #C75454;
  width: 602px;
  height: 134px;
  border-radius: 24px;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  cursor: pointer;
  @media (max-width: 1650px) {
    width: 502px;
  }
  @media (max-width: 1200px) and (min-width: 900px){
    margin: 30px;
  }
  @media (max-width: 900px) {
    width: 100%;
    height: 80px;
    font-size: 24px;
    border-radius: 18px;
  }
  @media (max-width: 768px) {
    gap: 10px;
    border-radius: 6px;
    padding: 0;
    font-size: 8px;
    width: 95px;
    height: 31px;
    margin-top: 0;
  }
}


.button-blog {
@media (min-width: 1200px) {
  background: #F89C1D;
  color: #1E1E1E;
}
}

.checkbox-input {
  display: none;
}

.popup-checkbox label {
  display: inline-block;
  width: 45px;
  height: 45px;
  border: 3px solid #D9D9D9;
  background: #FFFFFF;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  @media (max-width: 768px) {
    width: 19px;
    height: 19px;
    border-radius: 6px;
  }
}

.popup-checkbox input[type="checkbox"]:checked + label::after {
  content: "";
  position: absolute;
  left: 9px;
  width: 15px;
  height: 25px;
  border: solid #C75454;
  border-width: 0 6px 6px 0;
  transform: rotate(45deg);
  @media (max-width: 768px) {
    left: 3px;
    width: 5px;
    height: 9px;
    border-width: 0 2px 2px 0;
  }
}

.checkbox-element {
  display: flex;
  gap: 20px;
  align-items: center;
  @media (max-width: 1200px) {
    gap: 18px;
  }
  @media (max-width: 768px) {
    gap: 12px;
  }
  @media (max-width: 576px) {
    gap: 6px;
  }
}

.popup-notification {
  margin-top: 20px;
  padding: 20px 30px;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
}

.popup-notification.error {
  background: #ffe6e6;
  color: #c75454;
  border: 1px solid #c75454;
}

.header-popup {
  display: flex;
  justify-content: center;
}

.index-popup {
  background: url("/src/assets/images/mainPopup.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}

.blog-popup{
  @media (max-width: 768px) {
    background: url("/src/assets/images/popupBack.png") !important;
    margin-bottom: 40px !important;
  }
}

.popup-darken {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  pointer-events: none;
}

.popup-body > *:not(.popup-darken) {
  position: relative;
  z-index: 2;
}

.text {
  color: #FFFFFF;
}

.line-white {
  border-color: #FFFFFF;
}

.checkbox-text {
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  vertical-align: middle;
  color: #FFFFFF;
  @media (max-width: 1650px) {
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 576px) {
    font-size: 8px;
  }
}

.giv-lid {
  top: -55px;
  right: 112px;
  color: white;
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  @media (min-width: 576px) {
    position: absolute;
  }
  @media (max-width: 1840px) {
    right: 20px;
  }
  @media (max-width: 1650px) {
    right: -25px;
    font-size: 14px;
    top: -45px;
  }
  @media (max-width: 1200px) {
    left: 0;
    top: 153px;
  }

  @media (max-width: 800px) {
    right: -25px;
    font-size: 14px;
    top: -45px;
  }
  @media (max-width: 576px) {
    font-size: 8px;
  }
}


.giv-lid-href {
  text-decoration: underline;
  cursor: pointer;
}

.lid-container {
  position: relative;
}

.color-black {
  color: #1E1E1E;
}

.color-link {
  color: #C75454;
}

.blur-background {
  backdrop-filter: blur(17.3px);
  -webkit-backdrop-filter: blur(17.3px);
  background: rgba(255, 255, 255, 0.7);
  margin-bottom: 0;
}

.mobile-border{
  border: 0.5px solid #C3C3C3;
  border-radius: 6px;
}

.text-black{
  color: #1E1E1E;
}

.text-white{
  color: #FFFFFF;
}

.popup-giv-button{
  @media (max-width: 576px) {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
}
.desp-none{
  display: none;
}
</style>