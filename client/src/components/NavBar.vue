<template>
  <div className="container_nav-bar">
    <router-link to="/">
      <img
        src="../assets/life-organizer-logo-white-background.png"
        className="nav-logo"
        alt="Life Organizer logo"
      />
    </router-link>
    <router-link to="/">
      <div className="nav-brand-header">Life Organizer</div>
    </router-link>
    <!-- {currentUser &&
        <div className="right-side_nav-bar" onClick={logOut}>
          Log Out
      </div>

      } -->
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  // setup() {},
});
</script>


<style scoped>
/*
.container_nav-bar {
  width: 100%;
  padding: 8px 12px;
  background-color: #e00045;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  height: 64px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.container_nav-bar a {
  text-decoration: none;
  color: inherit;
}

.nav-logo {
  max-height: 44px;
}

.nav-brand-header {
  margin-left: 15px;
  font-size: 1.65em;
}
.nav-brand-header:hover {
  color: #ffffff;
}

.right-side_nav-bar {
  margin-left: auto;
  margin-right: 15px;
  padding: 8px 12px;
  transition: 0.5s;
}

.right-side_nav-bar:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 97%);
  color: #e00045;
  transition: 0.5s;
}
*/
</style>


<style lang="scss" scoped>
.container_nav-bar {
  width: 100%;
  padding: 8px 12px;
  background-color: $primaryColor;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  height: 64px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  a {
    text-decoration: none;
    color: inherit;
  }
}

.nav-logo {
  max-height: 44px;
}

.nav-brand-header {
  margin-left: 15px;
  font-size: 1.65em;
  &:hover {
    color: #ffffff;
  }
}

.right-side_nav-bar {
  margin-left: auto;
  margin-right: 15px;
  padding: 8px 12px;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 97%);
    color: $primaryColor;
    transition: 0.5s;
  }
}

@media only screen and (max-width: 415px) {
  .nav-brand-header {
    font-size: 1.45em;
  }

  .right-side_nav-bar {
    margin-right: 0;
  }
}
</style>
