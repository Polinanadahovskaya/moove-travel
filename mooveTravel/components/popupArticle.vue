<template>
  <div class="popup-comp">
    <div class="popup-article_body">
      <div class="text-line">
        <div class="popup-header">ОСТАВИТЬ ЗАЯВКУ <br/> НА ПОДБОР ТУРА</div>
        <div class="popup-line" style="width: 294px"></div>
      </div>
      <div style="display: flex; justify-content: space-between; gap: 62px;">
        <div class="popup-width">
          <div class="popup-inputs">
            <div class="pop-in">
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
            <div class="pop-in">
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
            <div class="pop-in">
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
            <div class="popup-button" @click="submitForm">Отправить</div>
          </div>
        </div>
        <div>
          <div class="popup-questions">Предпочтительный <br/> формат связи</div>
          <div class="popup-checkbox" style="flex-direction: column">
            <div class="checkbox-element">
              <input class="checkbox-input" type="checkbox" id="checkbox-phone" name="checkbox-phone"
                     v-model="contactByPhone" @change="validateForm"/>
              <label for="checkbox-phone"></label>
              <div class="checkbox-text">Звонок по телефону</div>
            </div>
            <div class="checkbox-element">
              <input class="checkbox-input" type="checkbox" id="checkbox-email" name="checkbox-email"
                     v-model="contactByEmail" @change="validateForm"/>
              <label for="checkbox-email"></label>
              <div class="checkbox-text">Письмо на электронную почту</div>
            </div>
            <div class="checkbox-element">
              <input class="checkbox-input" type="checkbox" id="checkbox-whats" name="checkbox-whats"
                     v-model="contactByWhatsApp" @change="validateForm"/>
              <label for="checkbox-whats"></label>
              <div class="checkbox-text">Сообщение в WhatsApp</div>
            </div>
          </div>
          <div v-if="contactError" class="error-message">{{ contactError }}</div>
          <div class="link-text">Нажимая «Оставить заявку» вы даёте согласие <br/> на <NuxtLink to="/loyarInformation" class="popup-link"> обработку персональных данных.</NuxtLink></div>
        </div>
      </div>
    </div>
    <div v-if="notification" :class="['popup-notification', notificationType]">
      {{ notification }}
    </div>
  </div>
</template>
<script setup>
import {ref, onMounted, computed, watch} from 'vue'
import {useRoute} from '#app'
import IMask from 'imask'

defineOptions({
  name: "popupTravelGid",
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

onMounted(() => {
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

watch([contactByPhone, contactByEmail, contactByWhatsApp], () => {
  if (contactByPhone.value || contactByEmail.value || contactByWhatsApp.value) {
    contactError.value = '';
  }
});
</script>
<style scoped>
.popup-comp {
  padding: 39px 30px;
  background: #C75454;
  border-radius: 34px;
  margin: 160px auto 138px;
}

.popup-article_body {
  display: flex;
  gap: 62px;
}

.popup-width {
  width: 55%;
}

.pop-in {
  position: relative;
}

.popup-label {
  position: absolute;
  z-index: 99999;
  top: 21px;
  left: 22px;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: #C3C3C3;
  transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
  pointer-events: none;
}

.popup-input:focus-visible ~ .popup-label,
.popup-input:not(:placeholder-shown) ~ .popup-label {
  top: 10px;
  font-size: 16px;
}

.popup-header {
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  vertical-align: middle;
  color: #FFFFFF;
  @media (max-width: 576px) {
    font-size: 14px;
  }
}

.text-line{
  display: flex;
  width: fit-content;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.popup-line {
  border-bottom: 6px solid #FFFFFF;
  width: 525px;
  margin: 10px 0 47px;
}

.popup-inputs {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.popup-input {
  height: 60px;
  border-radius: 9px;
  padding: 20px 24px;
  width: 100%;
  background: #FFFFFF;
  border: none;
  transition: border-color 0.3s ease;
  font-weight: 400;
  font-size: 26px;
  line-height: 100%;
  vertical-align: middle;
}

.popup-input.error {
  border: 2px solid #ff4444;
}

.error-message {
  color: #ff4444;
  font-family: Montserrat;
  font-size: 14px;
  margin-top: 5px;
  font-weight: 500;
}

.popup-questions {
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  vertical-align: middle;
  color: #FFFFFF;
}

.popup-checkbox {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  justify-content: space-between;
}

.popup-button {
  height: 57px;
  border-radius: 12px;
  padding: 48px 126px;
  margin-top: 19px;
  background: #F89C1D;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  cursor: pointer;
  @media (max-width: 1650px) {
  }
  @media (max-width: 1500px) {
    padding: 28px 100px;
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
}

.checkbox-element {
  display: flex;
  gap: 20px;
  align-items: center;
}

.popup-notification {
  margin-top: 20px;
  padding: 20px 30px;
  border-radius: 12px;
  font-size: 20px;
  font-family: Montserrat;
  font-weight: 600;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
}

.popup-notification.success {
  background: #e6ffe6;
  color: #1a7f1a;
  border: 1px solid #1a7f1a;
}

.popup-notification.error {
  background: #ffe6e6;
  color: #c75454;
  border: 1px solid #c75454;
}

.popup-body > *:not(.popup-darken) {
  position: relative;
  z-index: 2;
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
}

.link-text{
  font-weight: 400;
  font-style: italic;
  font-size: 18px;
  line-height: 100%;
  margin-top: 13px;
  color: #FFFFFF;
}

.popup-link{
  color: #FFFFFF;
  text-decoration: underline;
  cursor: pointer;
}
</style>