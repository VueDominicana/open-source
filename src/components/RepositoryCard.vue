<template>
  <div>
    <div class="row">
      <div class="col s12 m12">
        <div class="card">
          <div class="card-content black-text">
            <header>
              <strong>#1</strong>
              <a href="#">Amejia481/Associate-Android-Developer-Certification</a>
              <div class="star">
                <i class="material-icons">star</i>
                <span>723</span>
              </div>
            </header>
            <p>
              All the info and materials about the certification that I've collected so far
            </p>
          </div>
          <div class="card-action languages">
            <languages :languages="'javascript c# random'" />
          </div>
          <div class="card-action user">
            <a href="#" class="center-items">
              <img
                class="responsive-img circle"
                width="32"
                src="https://avatars2.githubusercontent.com/u/773158?v=4&s=64"
              />
              <span>ARTURO MEJIA</span>
            </a>
            <a href="#" class="center-items">
              <i class="material-icons">link</i>
              <span>Github Project</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import languages from "@/components/Languages";

export default {
  name: "Repository",
  components: {
    languages
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  font-size: 24px;
  margin-bottom: 10px;
  justify-content: center;
  strong {
    margin-right: 20px;
  }
  a {
    flex: 1;
  }
  .star {
    display: flex;
    align-items: center;
    i {
      margin-right: 3px;
    }
  }
}

.user {
  display: flex;
  align-items: center;

  img,
  i {
    margin-right: 10px;
  }

  a,
  i {
    color: #039be5 !important;
  }

  .center-items {
    display: flex;
    align-items: center;
  }
}
</style>
